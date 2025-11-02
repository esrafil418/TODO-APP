import { El } from "../../utils/el";

export function Header() {
  return El({
    element: "div",
    className: "w-full bg-[#6200ea] h-12 flex justify-between items-center p-2",
    children: [
      El({
        element: "div",
        className: "flex gap-2",
        children: [
          El({
            element: "img",
            src: "../../public/icons/bars.png",
            className: "w-8 h-8",
          }),
          El({
            element: "div",
            className: "text-white text-lg",
            innerText: "My To-Do Tasks",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex p-2 gap-5 justify-center items-center",
        children: [
          El({
            element: "div",
            className: "",
            children: [
              El({
                element: "i",
                className:
                  "fa-solid fa-magnifying-glass text-white bg-[#7926ed] p-2 rounded-l-sm",
              }),
              El({
                element: "input",
                className:
                  "p-1 bg-[#7926ed] outline-none rounded-r-sm text-gray-300",
                placeholder: "Search",
              }),
            ],
          }),
          El({
            element: "i",
            className: "fa-solid fa-filter text-white text-2xl",
          }),
          El({
            element: "i",
            className:
              "fa-solid fa-plus bg-white text-[#6200ea] rounded-xs p-1 h-[25px] text-xl",
          }),
        ],
      }),
    ],
  });
}
