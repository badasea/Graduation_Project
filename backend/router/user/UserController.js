// Mysql

// Test Data
const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
];

/**
 * @path {GET} http://localhost:3001/api/user/users
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
exports.getUsers = (req, res) => {
  //유저 정보 반환
  res.json({ users: users });
};

/**
 * @path {GET} http://localhost:3001/api/user/user?user_id=1
 * @description Query Params 요청 데이터 값이 있고 반환 값이 있는 GET Method
 *
 *  Query Params 방식
 *  user 뒤에 user_id변수를 통해 값을 찾아 올수 있다.
 *  &를 통해 두번째 변수를 받아서 사용할 수 있다.(/user?user_id=1&name="유저1")
 *
 */
exports.findOneUser1 = (req, res) => {
  const user_id = req.query.user_id;

  //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
  const user = users.filter((data) => data.id == user_id);

  res.json({ ok: false, user: user });
};

/**
 * @path {GET} http://localhost:3001/api/user/:user_id
 * @description Path Variables 요청 데이터 값이 있고 반환 값이 있는 GET Method
 *
 *  Path Variables 방식
 *
 *  ex) 아래 GET 주소 에서 :user_id 는 서버에서 설정한 주소 키 값이다.
 *      값을 찾을 때는 req.params.user_id 로 값을 찾는다.
 *
 *  *주의 사항*
 *  :user_id 이 부분은 변수이기 때문에
 *  경로가 /users/1 이거나 /users/2 이거 일때 둘다 라우터를 거치게 된다.
 *  그렇기 때문에 다른 라우터 보다 아래 있어야 한다.
 */
exports.findOneUser2 = (req, res) => {
  const user_id = req.params.user_id;

  //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
  const user = users.filter((data) => data.id == user_id);

  res.json({ ok: true, user: user });
};

/**
 * @path {POST} http://localhost:3001/api/user/add
 * @description POST Method
 *
 *  POST 데이터를 생성할 때 사용된다.
 *  req.body에 데이터를 담아서 보통 보낸다.
 */
exports.createUser = (req, res) => {
  // 구조분해를 통해 id 와 name을 추출
  const { id, name } = req.body;

  //concat 함수는 자바스크립트에서 배열 함수이다. 새로운 데이터를 추가하면 새로운 배열로 반환한다.
  const user = users.concat({ id, name });

  res.json({ ok: true, users: user });
};

/**
 * @path {PUT} http://localhost:3001/api/user/update
 * @description 전체 데이터를 수정할 때 사용되는 Method
 */
exports.setUsers = (req, res) => {
  // 구조분해를 통해 id 와 name을 추출
  const { id, name } = req.body;

  //map 함수는 자바스크립트에서 배열 함수이다. 요소를 일괄적으로 변경할 때 사용됩니다.
  const user = users.map((data) => {
    if (data.id == id) data.name = name;

    return {
      id: data.id,
      name: data.name,
    };
  });

  res.json({ ok: true, users: user });
};

/**
 * @path {PATCH} http://localhost:3001/api/user/update/:user_id
 * @description 단일 데이터를 수정할 때 사용되는 Method
 */
exports.setUser = (req, res) => {
  const { user_id } = req.params;
  const { name } = req.body;

  //map 함수는 자바스크립트에서 배열 함수이다. 요소를 일괄적으로 변경할 때 사용됩니다.
  const user = users.map((data) => {
    if (data.id == user_id) data.name = name;

    return {
      id: data.id,
      name: data.name,
    };
  });

  res.json({ ok: true, users: user });
};

/**
 * @path {DELETE} http://localhost:3001/api/user/delete
 * @description 데이터 삭제
 *
 */
exports.delUser = (req, res) => {
  const user_id = req.query.user_id;

  //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
  const user = users.filter((data) => data.id != user_id);

  res.json({ ok: true, users: user });
};
