import{normalize as e}from"@twind/core";var r=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["portrait","@media (orientation:portrait)"],["landscape","@media (orientation:landscape)"],["contrast-more","@media (prefers-contrast:more)"],["contrast-less","@media (prefers-contrast:less)"],["marker","& *::marker,&::marker"],["selection","& *::selection,&::selection"],["first-letter","&::first-letter"],["first-line","&::first-line"],["file","&::file-selector-button"],["placeholder","&::placeholder"],["backdrop","&::backdrop"],["first","&:first-child"],["last","&:last-child"],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])",({1:r,4:t,5:i},{e:o,h:s,v:a})=>{let n=i&&e(i)||("["==t[0]?t:a(t.slice(1)));return`${(n.includes("&")?n:"&"+n).replace(/&/g,`:merge(.${o(s(r))})`)}${"p"==r[0]?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],[/^\[(.+)]$/,({1:r})=>/[&@]/.test(r)&&e(r).replace(/[}]+$/,"").split("{")]];export{r as default};