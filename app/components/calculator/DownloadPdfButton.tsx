"use client";

import { FileDown } from "lucide-react";
import {
  generateCalculatorPdf,
  type CalculatorPdfData,
} from "../../lib/pdf/generateCalculatorPdf";

export default function DownloadPdfButton({
  data,
}: {
  data: CalculatorPdfData;
}) {
  function handleDownload() {
    generateCalculatorPdf(data);
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#030164] px-5 text-sm font-semibold text-white transition hover:bg-[#363199] dark:bg-white dark:text-[#030164] dark:hover:bg-[#E8E085]"
    >
      <FileDown size={18} />
      Download PDF
    </button>
  );
}