const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const access_token = "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";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) - min;
};

async function generateAiImages(length, input) {
  const imagesUrl = [];

  for (let i = 0; i < length; i++) {
    const randomNumebr = getRandomNumber(1, 100);
    const prompt = `${input} ${randomNumebr}`;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );
    

    if (!response.ok) {
      alert("Error");
    }

    const blob = await response.blob();

    const imgUrl = URL.createObjectURL(blob);

    imagesUrl.push(imgUrl);

    console.log(imgUrl);

    const imgCardMarkup = Array.from(
      { length: userImgQuantity },
      () => `
        <div class="img-card">
          <img src="images/spinning-circles.svg" alt="image">
          <a href="" class="download-btn">
            <img src="images/download.png" alt="">
          </a>
        </div>
    `
    ).join("");
  
    imageGallery.innerHTML = imgCardMarkup;
  }
};

const handleFormSubmission = (evt) => {
  evt.preventDefault();

  const userPrompt = evt.srcElement[0].value;
  const userImgQuantity = evt.srcElement[1].value;

  
  
  generateAiImages(userImgQuantity, userPrompt);
};

generateForm.onsubmit = handleFormSubmission;
