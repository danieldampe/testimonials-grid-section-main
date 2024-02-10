export default function Testimony({user, title, content}) {
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("testimony-component").content,
        $clone = document.importNode($template, true),
        $userImg = $clone.querySelector("[data-user-img]"),
        $userName = $clone.querySelector("[data-user-name]"),
        $title = $clone.querySelector("[data-title]"),
        $content = $clone.querySelector("[data-content]");
    $userImg.src = user.img;
    $userImg.alt = user.name;
    $userName.textContent = user.name;
    $title.textContent = title;
    $content.textContent = "“ " + content + " ”";
    return $clone;
};
