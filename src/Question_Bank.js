const TestModule = (() => {
    let chosen_test = "Starting Test"
    let currentIndex = 0
    let running_total = 0
    let finished = false
    
    const question_bank = {"Starting Test": 
    [{"id": 0, "question": "What is blood pressure?", "answer_options":  ["The pressure that blood exerts on the blood vessels", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "The pressure that blood exerts on the blood vessels"},
    {"id": 1, "question": "What is blood pressure measured in?", "answer_options":  ["Millimetres of mercury (mmHg)", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Millimetres of mercury (mmHg)"},
    {"id": 2, "question": "Question 3?", "answer_options":  ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Answer 1"},
    {"id": 3, "question": "Question 4?", "answer_options":  ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Answer 1"}],

    "Basic Overview":[{"id": 0, "question": "Question 21?", "answer_options":  ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Answer 1"},
    {"id": 1, "question": "Question 22?", "answer_options":  ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Answer 1"},
    {"id": 2, "question": "Question 23?", "answer_options":  ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Answer 1"},
    {"id": 3, "question": "Question 24?", "answer_options":  ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], "correct_answer": "Answer 1"}]

    }
    let current_test = question_bank[chosen_test]
  
    const nextQuestion = () => {
        return () => {
            if (currentIndex >= current_test.length){
                finished = true
                return "Finished"
            } else {
                const element = current_test[currentIndex];
                currentIndex = (currentIndex + 1);
        
                console.log(element);
                return element;
            }
          };
    };

    const getTest = (test_name = chosen_test) => {
        if (question_bank.hasOwnProperty(test_name)) {
          return question_bank[test_name];
        } else {
          return null;
        }
    };

    const chooseTest = (test_name) => {
        if (question_bank.hasOwnProperty(test_name)) {
          chosen_test = test_name;
          current_test = question_bank[test_name]
          currentIndex = 0
          running_total = 0
          finished = false
          console.log(`Switched to test: ${test_name}`);
        } else {
          console.error(`Test '${test_name}' does not exist.`);
        }
    };
  
    const getElementAtIndex = (index) => {
      if (index >= 0 && index < question_bank[chosen_test].length) {
        return question_bank[chosen_test][index];
      }
      return null; // Handle out-of-bound index
    };

    const checkAnswer = () => {
        return (answer) => {
            if (finished == false){
                if (answer == true){
                    running_total = running_total + 1
                    return running_total
                } else {
                    return running_total
                }
            } else {
                return running_total
            }
        };
    };

    const get_nextQuestion = nextQuestion();
    const get_runningTotal = checkAnswer();
  
    return { get_nextQuestion, chooseTest, get_runningTotal, getTest };
  })();
  
  export default TestModule;