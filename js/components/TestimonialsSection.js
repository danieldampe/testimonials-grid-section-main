import Testimony from "./Testimony.js";

export default function TestimonialsSection(arr) {
    const $div = document.createElement("div"),
        $fragment = document.createDocumentFragment();
    $div.classList.add("testimonials-section");
    arr.forEach((elm, index) => index <= 4 && $fragment.append(Testimony(elm)));
    $div.append($fragment);
    return $div;
};
