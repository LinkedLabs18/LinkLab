 function loadDoc1() {
      const selector = document.getElementById('doc-selector1').value;
      const container = document.getElementById('doc-content1');

      let iframeHTML = '';

      if (selector === 'doc5'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRlhxO_tJzuSbiDdIslaspfdd5MwPzTj-Mlhu9-EpwpPnu8wKRJURAIXwXEkDmeT1uMPVj5r2sGmmmD/pub?embedded=true"></iframe>';
      } else if (selector === 'doc6'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRNxjdzKPpc0QWY3PkY4D1skSnr-GtdIkLbuY14-DiTyU9HVEos_enRF8gBJRjILDKpySx1tlDIIXmJ/pub?embedded=true"></iframe>';
      } else if (selector === 'doc7'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRTmKSX37zUJHmrxYlvJs84npQQ_-94K4V2fHGdPXPHxaEJHDrysD45CUMFdqbr29NZnCWD1x0cSzv-/pub?embedded=true"></iframe>';
      } else if (selector === 'doc8'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSd4Rllg0Hs0UBldXv7CtGZ8OjnF0eN-FotbDlg0s2NHo-IPICVz1oDV3bFFEOKOCO85BGk5haByNGR/pub?embedded=true"></iframe>';
      } else if (selector === 'doc9'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTJpeEXSld3ZzvnK98yCYHuvTcIL4IYFS2CxK2MjZWkqOTsRC-_t4eETGF4kQ4_8GG263G4hkItFnO0/pub?embedded=true"></iframe>';
      } else if (selector === 'doc10'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vS3fYwNchFX8qqRfy-q2QA7zAXYckJGdqhRaj0HV-UmWwP38VJsDEZz1jLZI8hth2YWI1dJuKx0KnmU/pub?embedded=true"></iframe>';
      } else if (selector === 'doc11'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQWG7l63tNGmFlANzuD4wSMMBSJq7dtzRKhpk0_ezcgY297-tPX9YqTh4r0h8O7cI9nFNHEymdjsg6I/pub?embedded=true"></iframe>';
      }else if (selector === 'doc12'){
        iframeHTML = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSpW0APhMlwyko-ild4FcQopZyZ_eHE85j5ixkpHTsTWeM-71tsnQLr6LWEp04Rq4UKpxR9moq4a1tg/pub?embedded=true"></iframe>';
      } else {
        iframeHTML = '';
      }
      container.innerHTML = iframeHTML;
    }
