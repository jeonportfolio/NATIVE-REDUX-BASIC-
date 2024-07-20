## REDUX  (Reducer + Flux)

▶ 컴포넌트 간의 정보이동을 위한 전역관리 
▶  Reducer = Action과 Store의 상태를 기준으로 새로운 상태를 만들어 주는 것 
▶ `import { Provider } from 'react-redux'` Provider는 Store의 사용을 할 수 있게함

## Reudx 설치 

▶ `npm install redux react-redux`
▶  `npm install redux-logger`-> store에 logger를 넣음 applyMiddleware를 통해 log기록을 알 수 있음 -> 콘솔출력

## FLUX 

▶ Action, Dispatcher, Store, View 등으로 구성 됨 
▶ Action = 사용자의 Input을 통해서 또는 상태를 바꿔야만 할때 발생 
▶ Dispatcher = 모든 데이터의 흐름을 관리하는 중앙 허브 Store로의 접근이 가능하다.
▶ Store = 상태 저장소 상태를 업데이트 할 수 있는 함수를 제공 , 변경한 뒤에는 View로 전달 이후에 View를 갱신


## Redux 사용 규칙 

▶ 애플리케이션 모든 상태는 하나의 저장소 안에 저장해야 한다. (디버깅과 생산성 향상의 이점)
▶ 상태는 읽기만 허용 액션을 통해서만 변경가능 -> 중앙에서 흐름 관리를 엄격하게 하기 위함 
▶ 변화는 순수함수로만 해야함 (순수함수 = 외부 값에 의존하지 않고 매개변수만을 통해서 반환값을 만들어 내는 것)

## Middleware

▶store.dispatch 함수의 실행 뒤 어떠한 작업을 하기 위해 호출 
▶ redux logger -> prev state, next state, action등을 나열해서 보여준다 (디버깅을 위하여 사용)
▶ thunks -> 특정 작업을 나중에 하기 위해서 만들어둔 함수 
▶ redux thunks -> 비동기 작업을 처리할 때 가장 많이 사용하는 middleware 객체 대신 함수를 dispatch할 수 있게 해주는 것 
▶ redux-saga -> action의 발생여부를 모니터링 하다가 그 뒤 작업을 진행 하도록 함 

## combineReducers

▶ 여러개의 Reducer를 하나로 합쳐주는 역할을 한다.




