
  const questions = [
            {
                'que': 'Which of the following is markup language?',
                'a': 'HTML',
                'b': 'CSS',
                'c': 'javascript',
                'd': 'node',
                'correct': 'a'
            },
            {
                'que': 'Which of the following Javascript library?',
                'a': 'laura',
                'b': 'sql',
                'c': 'React',
                'd': 'php',
                'correct': 'c'
            },
            {
                'que': 'Which of the following relational database?',
                'a': 'MongoDb',
                'b': 'sql',
                'c': 'React',
                'd': 'php',
                'correct': 'b'
            },
            {
                'que': 'Which of the following is nodejs framework?',
                'a': 'Angular',
                'b': 'express',
                'c': 'React',
                'd': 'oracle',
                'correct': 'b'
            },
        ]

        let index = 0;
        const que = document.getElementById('que')
        const options = document.querySelectorAll('.options')
        const total = questions.length;
        let right = 0;
        const queInfo = document.getElementById("queinfo")
        const scoreInfo = document.getElementById('scoreinfo')

        let loadQuestion = () => {
            if (index == questions.length) {
                document.getElementById('sec-2').innerHTML = `<h3 class="text-center text-lg font-serif p-3">Thanks for playing the Quiz</h3>`
            }
            else {
                queInfo.innerText = `Queston: ${index + 1}/${questions.length}`
                const data = questions[index]
                que.innerText = `Q${index + 1})${data.que}`
                options[0].nextElementSibling.innerText = data.a
                options[1].nextElementSibling.innerText = data.b
                options[2].nextElementSibling.innerText = data.c
                options[3].nextElementSibling.innerText = data.d
            }

        }

        let next = () => {
            const data = questions[index];
            const ans = getAns();
            if (ans == data.correct) {
                right++
                console.log(right)
            }
            index++;
            if(index == questions.length-1){
                document.getElementById('nextbtn').innerText = 'submit'
            }
            if (index == questions.length) {
                submit()
            }
            reset();
            loadQuestion();

        }
        const getAns = () => {
            let answer = ''
            options.forEach((el) => {
                if (el.checked == true) {
                    answer = el.value;
                }
            })
            return answer;
        }
        const reset = () => {
            options.forEach((el) => {
                return el.checked = false;
            })
            return
        }
        const submit = () => {
            scoreInfo.innerText = `Score:${right}/${total}`
        }

        loadQuestion();