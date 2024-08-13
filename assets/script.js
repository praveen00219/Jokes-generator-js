document.getElementById("getJokeBtn").addEventListener("click", async () => {
  const jokeDisplay = document.getElementById("jokeDisplay");
  const emojiContainer = document.getElementById("emojiContainer");

  jokeDisplay.classList.add("shake"); // Add shake animation
  setTimeout(() => jokeDisplay.classList.remove("shake"), 500); // Remove after animation

  // Add emoji bubbles
  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = "🤣";
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.bottom = `-${Math.random() * 100}vh`;
    emojiContainer.appendChild(emoji);

    // Remove the emoji after animation
    setTimeout(() => emoji.remove(), 4000);
  }

  // Delay the sound effect by 2 seconds
  setTimeout(() => {
    const audio = new Audio("/assets/Emoji-sound/Emoji-laughing-sound.mp3");
    audio.play();
  }, 0);

  try {
    const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
      headers: { "X-Api-Key": "5oxe3tRzKQn/+lP1ZZYMTA==8JDEeu3zxRJJjGzC" },
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    jokeDisplay.textContent = `${data[0].joke} 🤣😂`;
  } catch (error) {
    jokeDisplay.textContent = "Oops! Something went wrong.";
  }
});
