import builders from 'webscript'
import { createElement } from 'webscript/dist/createDOMElement.js'

const { body, div, p, span, img } = builders(createElement);

const tag = span.class`inline-block bg-gray-200 rounded-full px-3 py-1 mr-2`;

const app =
  body.class`flex items-center justify-center h-screen`(
    div.class`max-w-sm rounded overflow-hidden shadow-lg`(
      img.class`w-full`.src`img/card-top.jpg`.alt`Sunset in the mountains`,
      div.class`px-6 py-4`(
        div.class`font-bold text-xl mb-2`("The Coldest Sunset"),
        p.class`text-gray-700 text-base`(
          " Lorem ipsum dolor sit amet, consectetur adipisicing ...")),
      div.class`px-6 py-4 text-sm font-semibold text-gray-700`(
        tag`#photography`,
        tag`#travel`,
        tag`#winter`)));
  
document.body = app;
