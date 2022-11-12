//좋은 문제

fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
    return newMembers;
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMembers),
  }))
  .then((response) => { 
    if (response.status === 200) {
      // 여기에 코드를 작성하세요.
      return fetch('https://learn.codeit.kr/api/members')
    } else {
      //error발생
      throw new Error('New members not added');
    }
  })
   //response.json은 js의 object로 나타내줌
   //response.text는 string의 JSON데이터를 나타내줌 (그냥 promise객체)
  .then((response) => response.json())
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });