(()=>{"use strict";var e,l={304:()=>{const e=window.wp.i18n,l=window.wp.blocks,t=window.wp.htmlEntities,a=JSON.parse('{"name":"omniform/fieldset"}'),i=window.React,n=window.wp.blockEditor,c=window.wp.components,h=window.wp.url,r=window.wp.coreData,o=window.wp.primitives,m=((0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M3.33 15.424a4.842 4.842 0 0 1 0-6.848l.207-.208v-2.42a2.421 2.421 0 0 1 2.421-2.422H8.38l.086-.086a4.842 4.842 0 0 1 6.848 0l.086.086h2.665a2.421 2.421 0 0 1 2.421 2.421v2.665a4.842 4.842 0 0 1 0 6.776v2.665a2.421 2.421 0 0 1-2.421 2.42h-2.665l-.086.087a4.842 4.842 0 0 1-6.848 0l-.086-.086H5.96a2.421 2.421 0 0 1-2.422-2.421v-2.421l-.207-.208ZM12 5a7 7 0 0 1 7 7h-1.604A5.396 5.396 0 0 0 12 6.604V5Zm0 12.396V19a7 7 0 0 1-7-7h1.604A5.396 5.396 0 0 0 12 17.396ZM15.5 12A3.5 3.5 0 0 0 12 8.5v1.896c.886 0 1.604.718 1.604 1.604H15.5Zm-5.104 0c0 .886.718 1.604 1.604 1.604V15.5A3.5 3.5 0 0 1 8.5 12h1.896Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M4 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4Zm16 2H4v2h16v-2Z",clipRule:"evenodd"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M2 7h8v2H2V7Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16ZM16 17H5V7h11l3.55 5L16 17Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M14 11H6v2h8v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Zm2 0h16v6H4V9Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10Zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"})),(0,i.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5Zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2Zm-3-4h8v2H8v-2Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4Zm-7 4h-4l1-4h4l-1 4Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14ZM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99 8-8Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm2 0c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V10h14v10Zm0-12H5V6h14v2ZM9 14H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8 4H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M4.273 3 3 4.273 5.727 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h11.727l4.003 4.003 1.273-1.273L4.273 3ZM4 9h3.727l2 2H6v2h5.727l2 2H4V9Z",clipRule:"evenodd"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M18.819 15H20V9h-7.181l-2-2H20a2 2 0 0 1 2 2v6a2 2 0 0 1-1.305 1.876L18.819 15Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"m13.62 8 1.8-3-1.8-3h-3.58l-1.8 3 1.8 3h3.58Zm-3.58 1-1.8 3 1.8 3h3.58l1.8-3-1.8-3h-3.58Zm6.24 2.51h3.59l1.79-3-1.79-3h-3.59l-1.8 3 1.8 3Zm3.59 1h-3.59l-1.8 3 1.8 3h3.59l1.79-3-1.79-3Zm-12.49-1 1.8-3-1.8-3H3.79L2 8.51l1.79 3h3.59Zm0 1H3.79l-1.79 3 1.79 3h3.59l1.8-3-1.8-3ZM10.04 16l-1.8 3 1.8 3h3.58l1.8-3-1.8-3h-3.58Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M18 9H6v2h12V9Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M6 13h8v2H6v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm16 2H4v10h16V7Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M6 7h8v2H6V7Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M14 11H6v2h8v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M6 15h8v2H6v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M18 7h-2v2h2V7Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12.5a1.5 1.5 0 0 0 1.5-1.5V13h2.5a1.5 1.5 0 0 0 1.5-1.5V5a2 2 0 0 0-2-2H4Zm16 8V5H4v14h12v-6.5a1.5 1.5 0 0 1 1.5-1.5H20Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M14 10H3v2h11v-2Zm0-4H3v2h11V6Zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4ZM3 16h7v-2H3v2Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M7 7h2v2H7V7Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M9 11H7v2h2v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M7 15h2v2H7v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M17 11h-6v2h6v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M11 15h6v2h-6v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M17 7h-6v2h6V7Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 2H5v14h14V5Z",clipRule:"evenodd"}))),v=((0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M17 11H7v2h10v-2Z"}),(0,i.createElement)(o.Path,{fill:"#D92E83",fillRule:"evenodd",d:"M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Zm2 0h16v8H4V8Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z"}))),d=((0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{d:"M7 7h2v2H7V7Z"}),(0,i.createElement)(o.Path,{d:"M9 11H7v2h2v-2Z"}),(0,i.createElement)(o.Path,{d:"M7 15h2v2H7v-2Z"}),(0,i.createElement)(o.Path,{d:"M17 11h-6v2h6v-2Z"}),(0,i.createElement)(o.Path,{d:"M11 15h6v2h-6v-2Z"}),(0,i.createElement)(o.Path,{d:"M17 7h-6v2h6V7Z"}),(0,i.createElement)(o.Path,{fillRule:"evenodd",d:"M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 2H5v14h14V5Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2Zm0 12H6V10h12v10Zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3Zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#1C3AA9",d:"M22 11.986c0-.143-.004-.286-.01-.43V3.44l-2.237 2.244A9.956 9.956 0 0 0 12.015 2 9.958 9.958 0 0 0 4.06 5.962l3.667 3.717a4.868 4.868 0 0 1 1.486-1.672c.64-.501 1.547-.91 2.802-.91a1 1 0 0 1 .355.05 4.833 4.833 0 0 1 3.696 2.233l-2.596 2.604c3.288-.013 7.003-.02 8.53.002Z"}),(0,i.createElement)(o.Path,{fill:"#4285F4",d:"M11.957 2c-.143 0-.286.004-.428.01H3.436l2.237 2.244A10.007 10.007 0 0 0 2 12.014c0 3.257 1.55 6.15 3.95 7.979l3.706-3.678a4.864 4.864 0 0 1-1.667-1.49c-.5-.642-.908-1.552-.908-2.81 0-.153.018-.27.051-.356A4.851 4.851 0 0 1 9.36 7.952l2.596 2.603c-.013-3.298-.02-7.023.002-8.555Z"}),(0,i.createElement)(o.Path,{fill:"#ABABAB",d:"M2 12.014c0 .144.004.287.01.43v8.116l2.238-2.244A9.956 9.956 0 0 0 11.985 22a9.959 9.959 0 0 0 7.956-3.962l-3.668-3.717a4.869 4.869 0 0 1-1.485 1.672c-.64.501-1.548.911-2.803.911a.998.998 0 0 1-.354-.051 4.833 4.833 0 0 1-3.696-2.233l2.596-2.604c-3.289.013-7.004.02-8.531-.002Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#0074BF",d:"M17 19.5h-2.5V22H17v-2.5Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#0074BF",d:"M14.5 19.5H12V22h2.5v-2.5ZM12 19.5H9.5V22H12v-2.5Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#0074BF",d:"M9.5 19.5H7V22h2.5v-2.5Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#0082BF",d:"M19.5 17H17v2.5h2.5V17Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#0082BF",d:"M17 17h-2.5v2.5H17V17Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#0082BF",d:"M14.5 17H12v2.5h2.5V17ZM12 17H9.5v2.5H12V17Z"}),(0,i.createElement)(o.Path,{fill:"#0082BF",d:"M9.5 17H7v2.5h2.5V17Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#0082BF",d:"M7 17H4.5v2.5H7V17Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#008FBF",d:"M22 14.5h-2.5V17H22v-2.5Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#008FBF",d:"M19.5 14.5H17V17h2.5v-2.5Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#008FBF",d:"M17 14.5h-2.5V17H17v-2.5ZM14.5 14.5H12V17h2.5v-2.5ZM12 14.5H9.5V17H12v-2.5ZM9.5 14.5H7V17h2.5v-2.5Z"}),(0,i.createElement)(o.Path,{fill:"#008FBF",d:"M7 14.5H4.5V17H7v-2.5Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#008FBF",d:"M4.5 14.5H2V17h2.5v-2.5Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#009DBF",d:"M22 12h-2.5v2.5H22V12Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#009DBF",d:"M19.5 12H17v2.5h2.5V12ZM17 12h-2.5v2.5H17V12ZM14.5 12H12v2.5h2.5V12ZM12 12H9.5v2.5H12V12ZM9.5 12H7v2.5h2.5V12ZM7 12H4.5v2.5H7V12Z"}),(0,i.createElement)(o.Path,{fill:"#009DBF",d:"M4.5 12H2v2.5h2.5V12Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#00ABBF",d:"M22 9.5h-2.5V12H22V9.5Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#00ABBF",d:"M19.5 9.5H17V12h2.5V9.5ZM17 9.5h-2.5V12H17V9.5ZM14.5 9.5H12V12h2.5V9.5ZM12 9.5H9.5V12H12V9.5ZM9.5 9.5H7V12h2.5V9.5ZM7 9.5H4.5V12H7V9.5Z"}),(0,i.createElement)(o.Path,{fill:"#00ABBF",d:"M4.5 9.5H2V12h2.5V9.5Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#00B9BF",d:"M22 7h-2.5v2.5H22V7Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#00B9BF",d:"M19.5 7H17v2.5h2.5V7Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#00B9BF",d:"M17 7h-2.5v2.5H17V7ZM14.5 7H12v2.5h2.5V7ZM12 7H9.5v2.5H12V7ZM9.5 7H7v2.5h2.5V7Z"}),(0,i.createElement)(o.Path,{fill:"#00B9BF",d:"M7 7H4.5v2.5H7V7Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#00B9BF",d:"M4.5 7H2v2.5h2.5V7Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#00C6BF",d:"M19.5 4.5H17V7h2.5V4.5Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#00C6BF",d:"M17 4.5h-2.5V7H17V4.5Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#00C6BF",d:"M14.5 4.5H12V7h2.5V4.5ZM12 4.5H9.5V7H12V4.5Z"}),(0,i.createElement)(o.Path,{fill:"#00C6BF",d:"M9.5 4.5H7V7h2.5V4.5Z",opacity:".8"}),(0,i.createElement)(o.Path,{fill:"#00C6BF",d:"M7 4.5H4.5V7H7V4.5Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#00D4BF",d:"M17 2h-2.5v2.5H17V2Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#00D4BF",d:"M14.5 2H12v2.5h2.5V2ZM12 2H9.5v2.5H12V2Z",opacity:".7"}),(0,i.createElement)(o.Path,{fill:"#00D4BF",d:"M9.5 2H7v2.5h2.5V2Z",opacity:".5"}),(0,i.createElement)(o.Path,{fill:"#fff",d:"m8.582 11.211.697-1.559c.254-.4.22-.89-.058-1.167a.713.713 0 0 0-.435-.206.77.77 0 0 0-.33.033 1.05 1.05 0 0 0-.58.45s-.954 2.224-1.31 3.224c-.354 1-.212 2.834 1.156 4.206 1.451 1.45 3.553 1.783 4.893.777a.84.84 0 0 0 .157-.103l4.13-3.448c.2-.166.497-.508.23-.898-.26-.38-.752-.121-.953.007l-2.376 1.729a.107.107 0 0 1-.154-.018c-.06-.074-.071-.27.024-.349l3.643-3.092c.315-.284.359-.696.104-.978-.249-.277-.644-.268-.962.018l-3.28 2.564a.145.145 0 0 1-.21-.027c-.065-.072-.09-.197-.016-.27L16.667 8.5a.726.726 0 0 0 .036-1.026.693.693 0 0 0-.504-.216.74.74 0 0 0-.522.207l-3.796 3.566c-.09.09-.269 0-.29-.106a.114.114 0 0 1 .032-.106L14.53 7.51a.715.715 0 1 0-1.01-1.014l-4.407 4.872c-.158.158-.39.166-.501.074a.166.166 0 0 1-.029-.23Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#F38020",d:"M12.703 3.165a9.406 9.406 0 0 0-6.538 2.377l.595-3.26L5.216 2 4.17 7.724 9.896 8.77l.282-1.545-2.94-.536a7.822 7.822 0 1 1-2.41 3.9l-1.52-.399a9.42 9.42 0 1 0 9.395-7.024Z"}),(0,i.createElement)(o.Path,{fill:"#F38020",fillRule:"evenodd",d:"m18.28 10.253-1.412-1.411-5.538 5.538-2.202-2.201-1.414 1.413 3.62 3.62 1.413-1.415-.006-.005 5.539-5.539Z",clipRule:"evenodd"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4 9.55 18Z"})),(0,i.createElement)(o.SVG,{viewBox:"0 0 24 24"},(0,i.createElement)(o.Path,{fill:"#D92E83",d:"M12 17c.283 0 .52-.096.713-.288A.968.968 0 0 0 13 16a.968.968 0 0 0-.287-.713A.968.968 0 0 0 12 15a.968.968 0 0 0-.713.287A.968.968 0 0 0 11 16c0 .283.096.52.287.712.192.192.43.288.713.288Zm-1-4h2V7h-2v6Zm1 9a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Z"})),({attributes:{fieldLabel:l,fieldName:t,isRequired:a},setAttributes:o,context:m})=>{const{postId:d,postType:f}=m,[E,Z]=(0,r.useEntityProp)("postType",f,"meta",d),V=E?.required_label,H=(0,n.useBlockProps)(),M=(0,n.useInnerBlocksProps)(),s=()=>o({isRequired:!a});return(0,i.createElement)("div",{...H},(0,i.createElement)("div",{className:"omniform-field-label"},(0,i.createElement)(n.RichText,{identifier:"fieldsetLabel","aria-label":(0,e.__)("Legend text","omniform"),placeholder:(0,e.__)("Enter a title to the field…","omniform"),multiple:!1,value:l,onChange:e=>t&&t!==(0,h.cleanForSlug)(l.replace(/(<([^>]+)>)/gi,""))?o({fieldLabel:e}):o({fieldLabel:e,fieldName:(0,h.cleanForSlug)(e.replace(/(<([^>]+)>)/gi,""))}),withoutInteractiveFormatting:!0,allowedFormats:["core/bold","core/italic","core/image"]}),a&&(0,i.createElement)(n.RichText,{identifier:"requiredLabel",tagName:"span",className:"omniform-field-required",placeholder:(0,e.__)("Enter a required field label…","omniform"),value:V,onChange:e=>{Z({...E,required_label:e})},withoutInteractiveFormatting:!0,allowedFormats:["core/bold","core/italic","core/image"]})),(0,i.createElement)("div",{...M}),(0,i.createElement)(n.BlockControls,null,(0,i.createElement)(c.ToolbarGroup,null,(0,i.createElement)(c.ToolbarButton,{icon:v,isActive:a,label:(0,e.__)("Required for submission","omniform"),onClick:s}))),(0,i.createElement)(n.InspectorControls,null,(0,i.createElement)(c.PanelBody,{title:(0,e.__)("Fieldset Settings","omniform")},(0,i.createElement)(c.ToggleControl,{label:(0,e.__)("Required for submission","omniform"),checked:a,onChange:s,help:(0,e.__)("Set default 'required' state for all fields in the group.","omniform")}),(0,i.createElement)(c.TextControl,{label:(0,e.__)("Name","omniform"),value:t,onChange:e=>{o({fieldName:e})},onBlur:()=>{o({fieldName:(0,h.cleanForSlug)((t||l).replace(/(<([^>]+)>)/gi,""))})},help:(0,e.__)("Name of the fieldset. Defaults to the fieldset's label.","omniform")}))))}),{name:f}=a;(0,l.registerBlockType)(f,{edit:d,icon:{foreground:"#D92E83",src:m},save:()=>n.useInnerBlocksProps.save(n.useBlockProps.save()).children,example:{attributes:{fieldLabel:(0,e.__)("Field Group","omniform")},innerBlocks:[{attributes:{fieldLabel:(0,e.__)("Option One","omniform"),layout:{type:"flex",orientation:"horizontal",justifyContent:"left"}},name:"omniform/field",innerBlocks:[{name:"omniform/input",attributes:{fieldType:"radio"}},{name:"omniform/label"}]},{attributes:{fieldLabel:(0,e.__)("Option Two","omniform"),layout:{type:"flex",orientation:"horizontal",justifyContent:"left"}},name:"omniform/field",innerBlocks:[{name:"omniform/input",attributes:{fieldType:"radio"}},{name:"omniform/label"}]},{attributes:{fieldLabel:(0,e.__)("Option Three","omniform"),layout:{type:"flex",orientation:"horizontal",justifyContent:"left"}},name:"omniform/field",innerBlocks:[{name:"omniform/input",attributes:{fieldType:"radio"}},{name:"omniform/label"}]}]},__experimentalLabel:({fieldLabel:e})=>e&&(0,t.decodeEntities)(e)})}},t={};function a(e){var i=t[e];if(void 0!==i)return i.exports;var n=t[e]={exports:{}};return l[e](n,n.exports,a),n.exports}a.m=l,e=[],a.O=(l,t,i,n)=>{if(!t){var c=1/0;for(m=0;m<e.length;m++){for(var[t,i,n]=e[m],h=!0,r=0;r<t.length;r++)(!1&n||c>=n)&&Object.keys(a.O).every((e=>a.O[e](t[r])))?t.splice(r--,1):(h=!1,n<c&&(c=n));if(h){e.splice(m--,1);var o=i();void 0!==o&&(l=o)}}return l}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[t,i,n]},a.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={806:0,138:0};a.O.j=l=>0===e[l];var l=(l,t)=>{var i,n,[c,h,r]=t,o=0;if(c.some((l=>0!==e[l]))){for(i in h)a.o(h,i)&&(a.m[i]=h[i]);if(r)var m=r(a)}for(l&&l(t);o<c.length;o++)n=c[o],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},t=globalThis.webpackChunkomniform=globalThis.webpackChunkomniform||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var i=a.O(void 0,[138],(()=>a(304)));i=a.O(i)})();