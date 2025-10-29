const autoformation = [
    { name: "html & css", code: "C1" },
    { name: "java script", code: "C2" },
    { name: "C++", code: "C3" },
    { name: "C#", code: "C4" },
    { name: "C", code: "C5" },
    { name: "java", code: "C6" },
    { name: "python", code: "C7" },
    { name: "git", code: "C8" },
  ];
  
  let score = 0;
  const totalQuestions = 4;
  
  function game() {
    alert("Welcome to the game!\nType 'exit' anytime to quit.");
    let questionsPool = [...autoformation];
  
    for (let i = 1; i <= totalQuestions; i++) {
      
      const index = Math.floor(Math.random() * questionsPool.length);
      const question = questionsPool[index];
  
      const reponse = prompt(
        `Question ${i}/${totalQuestions}:\nWhat is the corresponding skill code for: "${question.name}"?\n(Answer with C1 to C8 or type 'exit')`
      );
  
      if (!reponse || reponse.trim().toLowerCase() === "exit") {
        alert(`The game is over early! Your final score is: ${score}/${i - 1}`);
        return;
      }
  
      if (reponse.trim().toUpperCase() === question.code) {
        score++;
        alert(`✅ Correct! Your score: ${score}/${i}`);
      } else {
        alert(`❌ Wrong! The correct code was: ${question.code}\nYour score: ${score}/${i}`);
      }

      questionsPool.splice(index, 1);
    }
  
    alert(`🎉 Game finished! Your final score is: ${score}/${totalQuestions}`);
  }
  
  game();
  
  console.log("The score " + score);
  