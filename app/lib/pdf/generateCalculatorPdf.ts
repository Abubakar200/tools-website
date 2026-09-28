import jsPDF from "jspdf";

export type PdfItem = {
  label: string;
  value: string | number;
  detail?: string;
};

export type PdfTutorialStep = {
  title: string;
  description: string;
};

export type PdfFormulaRow = {
  title: string;
  formula: string;
};

export type CalculatorPdfData = {
  title: string;
  inputs: PdfItem[];
  results: PdfItem[];
  tutorial?: {
    title: string;
    description?: string;
    steps: PdfTutorialStep[];
  };
  formula?: {
    title: string;
    rows: PdfFormulaRow[];
  };
};

function cleanText(value: string) {
  return value
    .replace(/×/g, "x")
    .replace(/–/g, "-")
    .replace(/—/g, "-")
    .replace(/₹/g, "Rs ")
    .replace(/[^\x00-\x7F]/g, (char) => char);
}

function formatValue(item: PdfItem) {
  const value = cleanText(String(item.value));

  if (item.detail) {
    return `${value} ${cleanText(item.detail)}`;
  }

  return value;
}

export function generateCalculatorPdf(data: CalculatorPdfData) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  let y = 20;

  const primary = [3, 1, 100] as const;
  const purple = [54, 49, 153] as const;
  const accent = [232, 224, 133] as const;
  const muted = [90, 90, 100] as const;

  function checkPageSpace(requiredHeight = 15) {
    if (y + requiredHeight > pageHeight - 18) {
      doc.addPage();
      y = 20;
    }
  }

  function addSectionTitle(title: string) {
    checkPageSpace(18);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(...purple);

    doc.text(cleanText(title), margin, y);

    y += 8;
  }

  function addParagraph(text: string, fontSize = 10) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(...muted);

    const lines = doc.splitTextToSize(
      cleanText(text),
      contentWidth
    );

    const lineHeight = fontSize * 0.48;

    checkPageSpace(lines.length * lineHeight + 4);

    doc.text(lines, margin, y);

    y += lines.length * lineHeight + 5;
  }

  function addItems(items: PdfItem[]) {
    items.forEach((item) => {
      const value = formatValue(item);

      const valueLines = doc.splitTextToSize(
        value,
        contentWidth - 65
      );

      const boxHeight = Math.max(
        13,
        valueLines.length * 5 + 8
      );

      checkPageSpace(boxHeight + 3);

      doc.setFillColor(247, 247, 251);
      doc.roundedRect(
        margin,
        y - 5,
        contentWidth,
        boxHeight,
        3,
        3,
        "F"
      );

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...primary);

      doc.text(
        cleanText(item.label),
        margin + 5,
        y + 2
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...primary);

      doc.text(
        valueLines,
        pageWidth - margin - 5,
        y + 2,
        {
          align: "right",
          maxWidth: contentWidth - 70,
        }
      );

      y += boxHeight + 4;
    });
  }

  function addResultItems(items: PdfItem[]) {
    items.forEach((item, index) => {
      const value = formatValue(item);

      const valueLines = doc.splitTextToSize(
        value,
        contentWidth - 65
      );

      const boxHeight = Math.max(
        15,
        valueLines.length * 5 + 9
      );

      checkPageSpace(boxHeight + 4);

      if (index === items.length - 1) {
        doc.setFillColor(...accent);
      } else {
        doc.setFillColor(247, 247, 251);
      }

      doc.roundedRect(
        margin,
        y - 5,
        contentWidth,
        boxHeight,
        3,
        3,
        "F"
      );

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...primary);

      doc.text(
        cleanText(item.label),
        margin + 5,
        y + 2
      );

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...primary);

      doc.text(
        valueLines,
        pageWidth - margin - 5,
        y + 2,
        {
          align: "right",
          maxWidth: contentWidth - 70,
        }
      );

      y += boxHeight + 4;
    });
  }

  function addTutorial(
    tutorial: NonNullable<CalculatorPdfData["tutorial"]>
  ) {
    addSectionTitle(tutorial.title);

    if (tutorial.description) {
      addParagraph(tutorial.description);
    }

    tutorial.steps.forEach((step, index) => {
      const title = `${index + 1}. ${cleanText(step.title)}`;

      checkPageSpace(24);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...primary);

      doc.text(title, margin, y);

      y += 6;

      addParagraph(step.description, 9);

      y += 2;
    });
  }

  function addFormula(
    formula: NonNullable<CalculatorPdfData["formula"]>
  ) {
    addSectionTitle(formula.title);

    formula.rows.forEach((row) => {
      checkPageSpace(18);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...primary);

      doc.text(
        cleanText(row.title),
        margin,
        y
      );

      y += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...muted);

      const formulaLines = doc.splitTextToSize(
        cleanText(row.formula),
        contentWidth
      );

      doc.text(formulaLines, margin, y);

      y += formulaLines.length * 4.5 + 6;
    });
  }

  // --------------------------------
  // HEADER
  // --------------------------------

  doc.setFillColor(...primary);

  doc.rect(
    0,
    0,
    pageWidth,
    42,
    "F"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);

  doc.text(
    cleanText(data.title),
    margin,
    20
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(220, 220, 235);

  doc.text(
    "Calculator Summary",
    margin,
    29
  );

  doc.setFontSize(8);

  doc.text(
    new Date().toLocaleDateString(),
    pageWidth - margin,
    29,
    {
      align: "right",
    }
  );

  y = 54;

  // --------------------------------
  // INPUTS
  // --------------------------------

  addSectionTitle("Your Inputs");
  addItems(data.inputs);

  y += 5;

  // --------------------------------
  // RESULTS
  // --------------------------------

  addSectionTitle("Your Results");
  addResultItems(data.results);

  // --------------------------------
  // TUTORIAL
  // --------------------------------

  if (data.tutorial) {
    y += 7;

    addTutorial(data.tutorial);
  }

  // --------------------------------
  // FORMULA
  // --------------------------------

  if (data.formula) {
    y += 7;

    addFormula(data.formula);
  }

  // --------------------------------
  // FOOTER
  // --------------------------------

  const totalPages = doc.getNumberOfPages();

  for (let page = 1; page <= totalPages; page++) {
    doc.setPage(page);

    doc.setDrawColor(220, 220, 225);

    doc.line(
      margin,
      pageHeight - 13,
      pageWidth - margin,
      pageHeight - 13
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...muted);

    doc.text(
      "Generated by ToolSphere",
      margin,
      pageHeight - 7
    );

    doc.text(
      `Page ${page} of ${totalPages}`,
      pageWidth - margin,
      pageHeight - 7,
      {
        align: "right",
      }
    );
  }

  const safeFilename = data.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  doc.save(`${safeFilename}-result.pdf`);
}