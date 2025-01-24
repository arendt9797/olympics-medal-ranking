# 🏃‍➡️올림픽 메달 랭킹 생성기
<br/>

![image](https://github.com/user-attachments/assets/aa4683a0-e332-42e0-ac78-c099231483b4)

![image](https://github.com/user-attachments/assets/b261a6f1-bb8e-4ba2-89c3-17831a5aabf4)
<br/>
<br/>
<br/>

## 📜프로젝트 소개
>**개발 기간 :** 2025/01/21 ~ 2025/01/24

기본적인 리액트 문법과 리액트 공식 문서에 소개된 리액트적 사고를 따라 진행한 프로젝트입니다.
`state`, `setState`, 그리고 `useState`만을 사용하여 상태 관리를 했습니다.
또한 컴포넌트별로 jsx파일, css파일, 기능별로 js파일을 만들어 코드 분리를 진행했습니다. 
<br/>
<br/>
<br/>
### ⚛️리액트적 사고
**1. 본격적인 개발에 앞서 전체적인 UI를 컴포넌트 계층으로 나누기**

![image](https://github.com/user-attachments/assets/ef0b45cc-bad0-4637-a867-822d7cf79aac)

![image](https://github.com/user-attachments/assets/0c0ec0aa-fb55-4edd-b307-8fc5efe854f7)

<br/>

**2. 정적인 버전의 페이지 구현**  

상호작용에 의한 동적인 변화를 제외한 정적인 부분을 우선 구현

![image](https://github.com/user-attachments/assets/3cfa33ef-7144-4e03-bde2-721cab213dd8)

<br/>

**3. 어떤 데이터를 `state`로 할지 결정**
- **country, medals**: 사용자의 입력에 따라 변함.
  
- **rows**: 사용자가 CRUD를 진행함에 따라 테이블 행이 변함.

- **show, modalContent**: 버튼을 누르면 상태에 따라 모달 표시 여부가 결정되어야 함.
  
- **sortConfig**: 어떤 기준을 고르냐에 따라 정렬 방식이 달라져야 함.

<br/>

**4. `state`의 위치 결정**
- **country, medals**: 사용자가 입력하는 컴포넌트 `InputBar`에서 사용하므로, 부모 컴포넌트인 `OlympicsRankingContainer`에 위치
  
- **rows**: 테이블 행이 Create, Update되는 `InputBar`와 Read, Delete되는 `RankingTableRow`에서 사용하므로, 공통 부모 컴포넌트인 `OlympicsRankingContainer`에 위치

- **show, modalContent**: 모달 컴포넌트 `ExceptionModal`에서 사용되므로, 부모 컴포넌트인 `InputBar`에 위치
  
- **sortConfig**: `sortConfig`를 이용하여 기준에 맞게 정렬된 테이블 행 배열을 `RankingTableRow`에서 사용하므로, 부모 컴포넌트인 `RankingTable`에 위치
  
<br/>

**5. 역 데이터 흐름 추가하여 `state`변경**  

`setState`를 통해 상태 업데이트. 로컬 스토리지에 같이 저장을 해야하는 경우 동기화를 위해 `setState`와 `localStorage.setItem`을 같이 묶은 함수 사용.
`state`는 불변성을 유지해야하며, 기존 상태를 교체하거나 병합하여 새로운 상태를 저장.

<br/>
<br/>
<br/>

## 🪄프로젝트 특징
- **React**와 `useState`만을 사용하여 만들어진 프로젝트입니다.
- 부트스트랩을 활용하여 UI를 구현했습니다. 
- 메달 종류별, 메달 총합 등 여러 기준으로 정렬을 할 수 있습니다. 
- 중복 국가가 있을 경우 해당 국가는 리스트에 추가가 불가하고, 존재하지 않는 국가를 업데이트 할 수 없도록 했습니다. 
- **브라우저 스토리지**를 사용하여 정보가 유지되도록 했습니다. 
<br/>
<br/>
<br/>

## 🔫트러블 슈팅
- ### 
<br/>
<br/>
<br/>

## 🖥️기술 스택
### 환경
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

### 개발
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 


