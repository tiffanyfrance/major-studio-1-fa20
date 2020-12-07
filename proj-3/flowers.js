// Paths for hand-drawn flowers
// All rights for this code mantained by the creator, Tiffany France

let leafsvg = `<path class="cls-1" d="M57.72.53S107.91,80.61.62,166.14"/>
  <path class="cls-2" d="M84.84,21.77c4.77-5,4.28-13.19,4.28-13.19s-8.2-.08-13,4.92-4.27,13.19-4.27,13.19S80.08,26.77,84.84,21.77Z"/>
  <path class="cls-2" d="M88.16,49.39C93.63,45.18,94.4,37,94.4,37s-8.09-1.34-13.56,2.87-6.25,12.38-6.25,12.38S82.69,53.6,88.16,49.39Z"/>
  <path class="cls-2" d="M85.51,78.82c6-3.46,7.8-11.46,7.8-11.46S85.46,65,79.49,68.45s-7.8,11.46-7.8,11.46S79.54,82.29,85.51,78.82Z"/>
  <path class="cls-2" d="M76.66,108c6.77-1.36,11.08-8.34,11.08-8.34s-6.66-4.78-13.43-3.43-11.08,8.34-11.08,8.34S69.89,109.36,76.66,108Z"/>
  <path class="cls-2" d="M57.5,138.51c6.9-.3,12.23-6.54,12.23-6.54s-5.86-5.75-12.75-5.45-12.23,6.54-12.23,6.54S50.6,138.81,57.5,138.51Z"/>
  <path class="cls-2" d="M38.42,161.08c6.87.59,13-4.91,13-4.91s-5.06-6.46-11.94-7-13,4.9-13,4.9S31.54,160.48,38.42,161.08Z"/>
  <path class="cls-2" d="M51.43,26.47c-5-4-6.38-12.09-6.38-12.09s6.71-1.59,11.71,2.42,6.38,12.09,6.38,12.09S56.43,30.47,51.43,26.47Z"/>
  <path class="cls-2" d="M52.65,51.39C48.06,47.18,47.4,39,47.4,39s6.81-1.34,11.41,2.87,5.25,12.38,5.25,12.38S57.25,55.6,52.65,51.39Z"/>
  <path class="cls-2" d="M49.88,75.82c-5-3.46-6.55-11.46-6.55-11.46S49.93,62,55,65.45,61.5,76.91,61.5,76.91,54.9,79.29,49.88,75.82Z"/>
  <path class="cls-2" d="M38.4,96.92c-1.64-6.19,2-13.52,2-13.52s6.35,2.71,8,8.9-2,13.51-2,13.51S40,103.11,38.4,96.92Z"/>
  <path class="cls-2" d="M22.59,119.7c-1.2-6.12,3.13-13.08,3.13-13.08s6.27,3,7.47,9.08-3.12,13.08-3.12,13.08S23.79,125.82,22.59,119.7Z"/>
  <path class="cls-2" d="M5.86,137.72c-2-5.77,1.53-13.12,1.53-13.12s6.72,2,8.7,7.77-1.53,13.12-1.53,13.12S7.84,143.49,5.86,137.72Z"/>`

  let nativesvg = `<path class="cls-1" d="M16.92,0S20.09,15.85,35.1,21.48c0,0-19.48,11.9-18.18,19.08S15.55,28.46,0,20.28C0,20.28,13.75,14.16,16.92,0Z"/>
  <path class="cls-2" d="M16.9,8s1.87,9.32,10.69,12.63c0,0-11.45,7-10.69,11.22S16.1,24.71,7,19.91C7,19.91,15,16.31,16.9,8Z"/>`

  let rancherasvg = `<path class="cls-1" d="M37.81,13.21c0,7.29-10.6,13.21-10.6,13.21S16.6,20.5,16.6,13.21,21.35,0,27.21,0,37.81,5.91,37.81,13.21Z"/>
  <path class="cls-1" d="M41.21,37.81c-7.3,0-13.21-10.6-13.21-10.6S33.91,16.6,41.21,16.6s13.21,4.75,13.21,10.61S48.5,37.81,41.21,37.81Z"/>
  <path class="cls-1" d="M13.21,16.6c7.29,0,13.21,10.61,13.21,10.61s-5.92,10.6-13.21,10.6S0,33.07,0,27.21,5.91,16.6,13.21,16.6Z"/>
  <path class="cls-1" d="M16.6,41.21C16.6,33.91,27.21,28,27.21,28s10.6,5.91,10.6,13.21-4.74,13.21-10.6,13.21S16.6,48.5,16.6,41.21Z"/>
  <circle class="cls-2" cx="27.21" cy="27" r="3.63"/>`

  let sonjarochosvg = `<path class="cls-1" d="M42.2,15.05C39.11,4.71,25.38,0,25.38,0s-8.74,12.06-5.65,22.4,10.61,17.07,16.82,15S45.28,25.38,42.2,15.05Z"/>
  <path class="cls-1" d="M20.85,21.12C10.76,18.74,0,28.85,0,28.85S5.6,42.8,15.69,45.17s19.43-1.08,20.86-7.73S30.94,23.49,20.85,21.12Z"/>
  <path class="cls-1" d="M15.2,43.51c-7,8-4,22.78-4,22.78s14.34,1.9,21.34-6.07,8.82-18.16,4-22.78S22.21,35.55,15.2,43.51Z"/>
  <path class="cls-1" d="M30.89,59.84c3.09,10.34,16.82,15,16.82,15s8.74-12,5.66-22.39S42.75,35.41,36.55,37.44,27.81,49.5,30.89,59.84Z"/>
  <path class="cls-1" d="M52.24,53.77C62.33,56.14,73.09,46,73.09,46s-5.6-14-15.69-16.32S38,30.8,36.55,37.44,42.15,51.39,52.24,53.77Z"/>
  <path class="cls-1" d="M57.89,31.37c7-8,4-22.78,4-22.78S47.59,6.7,40.58,14.66s-8.82,18.17-4,22.78S50.88,39.34,57.89,31.37Z"/>
  <path class="cls-2" d="M40.26,21.53c-2.12-7.09-11.54-10.32-11.54-10.32s-6,8.27-3.87,15.36,7.27,11.7,11.53,10.31S42.37,28.62,40.26,21.53Z"/>
  <path class="cls-2" d="M25.62,25.69C18.7,24.06,11.32,31,11.32,31s3.84,9.57,10.76,11.19,13.32-.74,14.3-5.3S32.54,27.32,25.62,25.69Z"/>
  <path class="cls-2" d="M21.74,41.05C16.94,46.51,19,56.66,19,56.66S28.81,58,33.61,52.5s6-12.45,2.77-15.62S26.55,35.58,21.74,41.05Z"/>
  <path class="cls-2" d="M32.5,52.24C34.62,59.33,44,62.56,44,62.56s6-8.27,3.87-15.36S40.63,35.49,36.38,36.88,30.39,45.15,32.5,52.24Z"/>
  <path class="cls-2" d="M47.14,48.08c6.92,1.62,14.3-5.31,14.3-5.31S57.6,33.21,50.68,31.58s-13.32.75-14.3,5.3S40.22,46.45,47.14,48.08Z"/>
  <path class="cls-2" d="M51,32.72c4.8-5.46,2.76-15.62,2.76-15.62S44,15.8,39.14,21.26s-6,12.46-2.76,15.62S46.21,38.18,51,32.72Z"/>
  <ellipse class="cls-3" cx="36.02" cy="37.81" rx="6.66" ry="6.97"/>`

  let huapangosvg = `<ellipse class="cls-1" cx="23.01" cy="49.19" rx="10.05" ry="41.37" transform="translate(-22.07 18.91) rotate(-31.04)"/>
  <ellipse class="cls-1" cx="43.22" cy="43.5" rx="41.37" ry="10.05" transform="translate(-1.27 85.7) rotate(-88.67)"/>
  <ellipse class="cls-1" cx="77.72" cy="64.72" rx="41.37" ry="10.05" transform="translate(-21.02 42.83) rotate(-27.29)"/>
  <ellipse class="cls-1" cx="65.79" cy="49.1" rx="41.37" ry="10.05" transform="translate(-11.59 76.53) rotate(-56.25)"/>
  <circle class="cls-2" cx="66.45" cy="2.98" r="2.98"/>
  <circle class="cls-2" cx="23.34" cy="5.36" r="2.98"/>
  <circle class="cls-2" cx="105.22" cy="30.29" r="2.98"/>
  <ellipse class="cls-3" cx="32.09" cy="63.39" rx="6.16" ry="25.39" transform="translate(-28.09 25.62) rotate(-31.04)"/>
  <ellipse class="cls-3" cx="44.49" cy="59.9" rx="25.39" ry="6.16" transform="translate(-16.43 102.99) rotate(-88.67)"/>
  <ellipse class="cls-3" cx="65.66" cy="72.92" rx="25.39" ry="6.16" transform="translate(-26.12 38.21) rotate(-27.29)"/>
  <ellipse class="cls-3" cx="58.34" cy="63.34" rx="25.39" ry="6.16" transform="translate(-26.73 76.66) rotate(-56.25)"/>`

  let mariachisvg = `<ellipse class="cls-1" cx="104.79" cy="53.64" rx="19.95" ry="53.64"/>
  <ellipse class="cls-1" cx="62.85" cy="73.84" rx="19.95" ry="53.64" transform="translate(-34.07 76.94) rotate(-51.43)"/>
  <ellipse class="cls-1" cx="52.49" cy="119.22" rx="53.64" ry="19.95" transform="translate(-25.21 14.67) rotate(-12.86)"/>
  <ellipse class="cls-1" cx="81.51" cy="155.61" rx="53.64" ry="19.95" transform="translate(-94.06 161.53) rotate(-64.29)"/>
  <ellipse class="cls-1" cx="128.06" cy="155.61" rx="19.95" ry="53.64" transform="translate(-54.84 70.97) rotate(-25.71)"/>
  <ellipse class="cls-1" cx="157.08" cy="119.22" rx="19.95" ry="53.64" transform="translate(5.9 245.83) rotate(-77.14)"/>
  <ellipse class="cls-1" cx="146.72" cy="73.84" rx="53.64" ry="19.95" transform="translate(-14.03 107.59) rotate(-38.57)"/>
  <line class="cls-2" x1="59.96" y1="73.84" x2="105.52" y2="106.02"/>
  <line class="cls-2" x1="46.94" y1="118.79" x2="105.52" y2="106.02"/>
  <line class="cls-2" x1="83.22" y1="153.61" x2="105.52" y2="106.02"/>
  <line class="cls-2" x1="132.54" y1="159.37" x2="105.52" y2="106.02"/>
  <line class="cls-2" x1="153.52" y1="70.74" x2="105.52" y2="106.02"/>
  <line class="cls-2" x1="105.31" y1="43.86" x2="105.52" y2="106.02"/>
  <circle class="cls-3" cx="166.76" cy="119.22" r="2.88"/>
  <circle class="cls-3" cx="105.52" cy="42.88" r="2.88"/>
  <circle class="cls-3" cx="44.28" cy="119.72" r="2.88"/>
  <circle class="cls-3" cx="59.96" cy="73.84" r="2.88"/>
  <circle class="cls-4" cx="105.52" cy="106.02" r="15.72"/>
  <circle class="cls-3" cx="81.39" cy="155.54" r="2.88"/>
  <circle class="cls-3" cx="133.01" cy="160.84" r="2.88"/>
  <circle class="cls-3" cx="154.19" cy="69.51" r="2.88"/>
  <line class="cls-2" x1="164.31" y1="118.34" x2="105.52" y2="106.02"/>`

  let corridossvg = `<circle class="cls-1" cx="17.89" cy="18" r="9.22"/>
  <path class="cls-2" d="M21.62,6.15c0,3.39-3.73,6.14-3.73,6.14s-3.73-2.75-3.73-6.14S17.89,0,17.89,0,21.62,2.75,21.62,6.15Z"/>
  <path class="cls-2" d="M15.21,5.92c1.7,2.94-.16,7.19-.16,7.19s-4.61-.52-6.3-3.45.15-7.19.15-7.19S13.51,3,15.21,5.92Z"/>
  <path class="cls-2" d="M9.55,8.94c2.94,1.69,3.45,6.3,3.45,6.3s-4.25,1.86-7.19.16S2.36,9.1,2.36,9.1,6.61,7.24,9.55,8.94Z"/>
  <path class="cls-2" d="M6.15,14.38c3.39,0,6.14,3.73,6.14,3.73s-2.75,3.73-6.14,3.73S0,18.11,0,18.11,2.75,14.38,6.15,14.38Z"/>
  <path class="cls-2" d="M5.92,20.79c2.94-1.7,7.19.16,7.19.16s-.52,4.61-3.45,6.3-7.19-.15-7.19-.15S3,22.49,5.92,20.79Z"/>
  <path class="cls-2" d="M8.94,26.45c1.69-2.94,6.3-3.45,6.3-3.45s1.86,4.25.16,7.19-6.3,3.45-6.3,3.45S7.24,29.39,8.94,26.45Z"/>
  <path class="cls-2" d="M14.38,29.85c0-3.39,3.73-6.14,3.73-6.14s3.73,2.75,3.73,6.14S18.11,36,18.11,36,14.38,33.25,14.38,29.85Z"/>
  <path class="cls-2" d="M20.79,30.08c-1.7-2.94.16-7.19.16-7.19s4.61.52,6.3,3.45-.15,7.19-.15,7.19S22.49,33,20.79,30.08Z"/>
  <path class="cls-2" d="M26.45,27.06c-2.94-1.69-3.45-6.3-3.45-6.3s4.25-1.86,7.19-.16,3.45,6.3,3.45,6.3S29.39,28.76,26.45,27.06Z"/>
  <path class="cls-2" d="M29.85,21.62c-3.39,0-6.14-3.73-6.14-3.73s2.75-3.73,6.14-3.73S36,17.89,36,17.89,33.25,21.62,29.85,21.62Z"/>
  <path class="cls-2" d="M30.08,15.21c-2.94,1.7-7.19-.16-7.19-.16s.52-4.61,3.45-6.3,7.19.15,7.19.15S33,13.51,30.08,15.21Z"/>
  <path class="cls-2" d="M27.06,9.55c-1.69,2.94-6.3,3.45-6.3,3.45S18.9,8.75,20.6,5.81s6.3-3.45,6.3-3.45S28.76,6.61,27.06,9.55Z"/>`

  let bandasvg = `<path class="cls-1" d="M55.56,0a331.55,331.55,0,0,1-22.7,39.58A92,92,0,0,1,0,68.68,101.31,101.31,0,0,1,15.84,28.06C29.29,8.16,55.56,0,55.56,0Z"/>
  <path class="cls-1" d="M78.64,20.27S66.32,50.5,44.48,60.52,0,68.68,0,68.68a123.89,123.89,0,0,1,36.3-26C58.14,32.67,78.64,20.27,78.64,20.27Z"/>
  <path class="cls-1" d="M92.44,57.3S68.53,79.52,44.5,79.4,0,68.68,0,68.68s20.58-9,44.6-8.9S92.44,57.3,92.44,57.3Z"/>`