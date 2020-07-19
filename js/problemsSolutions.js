let src = document.getElementById("images");
const pageNames = ["primary", "rental", "multipurpose", "barn", "outside"];
let len = 85;
const starting = () => {
  let urlname = window.location.pathname.slice(0, -5);
  if (urlname == "/allimages") {
    pageNames.forEach(pageName => {
      addImagesToPageFromURl(`/${pageName}`)
    })
  } else
    addImagesToPageFromURl(urlname);
}

function addImagesToPageFromURl(urlname) {
  for (let i = 1; i <= len; i++) {
    let img = new Image();
    img.src = `./images${urlname}${urlname} (${i}).jpg`;
    img.onload = () => {
      if (img.width !== 0) {
        img.setAttribute("class", 'img-fluid');
        img.alt = 'Image';

        let a = document.createElement('a');
        a.href = `./images${urlname}${urlname} (${i}).jpg`;

        a.setAttribute("class", "d-block figure");
        a.setAttribute("data-fancybox", "gallery");
        a.setAttribute("data-width", "500");
        // a.setAttribute("data-thumb", `./images${urlname}${urlname} (${i}).jpg`)
        a.setAttribute("data-caption", `${urlname}`);
        a.appendChild(img);

        let div = document.createElement('div');
        div.setAttribute("class", "col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry");
        div.appendChild(a);

        src.appendChild(div);
      }
    }
  }
}
//video.js
document.getElementById("introBtn").addEventListener("click", () => {
  document.getElementById("vidStart").click();
});

//nav.js
const init = () => {
  [...document.getElementsByClassName("childnavlink")].forEach((linkElem) => {
    linkElem.addEventListener("click", () => {
      window.location = `${linkElem.href}`
    });
  });
}

window.onload = () => {
  init;
  starting;
}