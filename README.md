- https://github.com/ghsdh3409/fc-react-native/
- 메세지전송컴포넌트2 -> react-native-vactor-icon 사용

### navigation

```ts
const { goBack, canGoBack } = useNavigation();
```

- stack을 로그인일때랑 로그아웃일때랑 나눠서해야함
- 처음 init state 받아서 (여기는 앱이 실행될때 initialized하는 구간) 로딩 스크린을 보여준다.
- useIsFocused -> 현재 이 스크린을 보고있는가

```js
useEffect(() => {
  const unsubscribeFocus = navigation.addListener("focus", () => {
    // 화면이 focus될 때 수행할 작업
  });

  const unsubscribeBlur = navigation.addListener("blur", () => {
    // 화면이 blur될 때 수행할 작업
  });

  return () => {
    unsubscribeFocus();
    unsubscribeBlur();
  };
}, [navigation]);
```

### flatlist

- ItemSeparatorComponent -> 각 개체사이에 넣을 꺼
- ListEmptyComponent={() => {...}} -> 리스트 비어있을때
- 거꾸로 올라갈때는 inverted 옵션 추가

### useRoute

- 페이지 이동시 props 넘기는데 이 props을 가져오는 훅

```ts
import { RouteProp, useRoute } from "@react-navigation/native";

// 어떤 스크린에서 사용하는지 Chat
const { params } = useRoute<RouteProp<RootStackParamList, "Chat">>();
```

### 로딩

- ActivityIndicator

## 할꺼

- 공통 헤더만들기
- 이미지 불러오는거, 크롭
- react-native-crop-picker - HomeScreen
- 디버깅할때 Pods만지워도 되네
- 프로필 이미지 크게보는거 react-native-image-viewing -> 사용자이미지프로필보여주기

### 노티눌렀을때 원하는 스크린으로 이동하기

#### 앱이 백그라운드에 있을때

- 그냥 홈스크린에 들어오면 네비게이션으로 넘겨버리네
- 실시간 채팅의 경우 파이어베이스 메세지를 쓰는데, 파이어베이스 메세지내에 onNotificationOpenedApp이라는 메소드로 접근한다

#### 앱이 완전 종료되었을때
