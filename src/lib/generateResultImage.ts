/**
 * Captures a DOM element as a 1080x1080 PNG image blob.
 * Uses html2canvas-pro (already installed for PDF export).
 */
export async function generateResultImage(element: HTMLElement): Promise<Blob> {
  const { default: html2canvas } = await import('html2canvas-pro');

  const canvas = await html2canvas(element, {
    scale: 1,
    width: 1080,
    height: 1080,
    useCORS: true,
    backgroundColor: '#F8FAFC',
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to generate image'));
      },
      'image/png',
      1.0,
    );
  });
}

/** Download a blob as a file */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
