function loadDoc1() {
  const selector = document.getElementById('doc-selector1').value;
  const container = document.getElementById('doc-content1');

  let iframeSrc = '';

  // Map dropdown selections to Google Docs URLs
  const docMap = {
    doc5: 'https://docs.google.com/document/d/e/2PACX-1vRlhxO_tJzuSbiDdIslaspfdd5MwPzTj-Mlhu9-EpwpPnu8wKRJURAIXwXEkDmeT1uMPVj5r2sGmmmD/pub?embedded=true',
    doc6: 'https://docs.google.com/document/d/e/2PACX-1vRNxjdzKPpc0QWY3PkY4D1skSnr-GtdIkLbuY14-DiTyU9HVEos_enRF8gBJRjILDKpySx1tlDIIXmJ/pub?embedded=true',
    doc7: 'https://docs.google.com/document/d/e/2PACX-1vRTmKSX37zUJHmrxYlvJs84npQQ_-94K4V2fHGdPXPHxaEJHDrysD45CUMFdqbr29NZnCWD1x0cSzv-/pub?embedded=true',
    doc8: 'https://docs.google.com/document/d/e/2PACX-1vSd4Rllg0Hs0UBldXv7CtGZ8OjnF0eN-FotbDlg0s2NHo-IPICVz1oDV3bFFEOKOCO85BGk5haByNGR/pub?embedded=true',
    doc9: 'https://docs.google.com/document/d/e/2PACX-1vTJpeEXSld3ZzvnK98yCYHuvTcIL4IYFS2CxK2MjZWkqOTsRC-_t4eETGF4kQ4_8GG263G4hkItFnO0/pub?embedded=true',
    doc10: 'https://docs.google.com/document/d/e/2PACX-1vS3fYwNchFX8qqRfy-q2QA7zAXYckJGdqhRaj0HV-UmWwP38VJsDEZz1jLZI8hth2YWI1dJuKx0KnmU/pub?embedded=true',
    doc11: 'https://docs.google.com/document/d/e/2PACX-1vQWG7l63tNGmFlANzuD4wSMMBSJq7dtzRKhpk0_ezcgY297-tPX9YqTh4r0h8O7cI9nFNHEymdjsg6I/pub?embedded=true',
    doc12: 'https://docs.google.com/document/d/e/2PACX-1vSpW0APhMlwyko-ild4FcQopZyZ_eHE85j5ixkpHTsTWeM-71tsnQLr6LWEp04Rq4UKpxR9moq4a1tg/pub?embedded=true',
    doc13: 'https://docs.google.com/document/d/e/2PACX-1vTz-Wjx7QYnBijzbWRJqHoCVbOd9wnZA-PsmLeZFYNwJmJkdO8utXe4ZFhEHONC9gKWHtuYTg9uj2n2/pub?embedded=true',
    doc14: 'https://docs.google.com/document/d/e/2PACX-1vRFlLIrZEf8kHRe7niBuhqfBCWkC1tE6O9dpYhQU21J13QyinWTTbZryS_5XQntitde8nWNDpl3ZjUX/pub?embedded=true'
  };

  iframeSrc = docMap[selector] || '';

  if (iframeSrc) {
    container.innerHTML = `
      <div style="overflow-x:auto; padding-bottom:1rem;">
        <iframe src="${iframeSrc}" style="width:100%; min-width:800px; height:600px; border:none; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.5);"></iframe>
      </div>
    `;
  } else {
    container.innerHTML = `<p>No document selected.</p>`;
  }
}

