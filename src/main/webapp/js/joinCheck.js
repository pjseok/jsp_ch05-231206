/**
 * 
 */

 function joinCheck(){
	/* 아이디가 공란으로 입력되었는 유효성 검사 */
 	if(document.joinForm.memberid.value.length == 0) {
 		alert('아이디는 필수 입력사항입니다.다시 확인해 주세요!');
 		return false;
 	}
 	
 	/* 비밀번호가 공란으로 입력되었는 유효성 검사 */
 	if(document.joinForm.memberpw.value.length == 0) {
 		alert('비밀번호는 필수 입력사항입니다.다시 확인해 주세요!');
 		return false;
 	}
 	
 	/* 비밀번호는 숫자만 입력가능하도록 유효성 검사 */
	var numPassword = /^[0-9]*$/;
	if(!numPassword.test(document.joinForm.memberpw.value)) {
		alert('비밀번호는 숫자만 입력가능합니다.다시 확인해 주세요!');
 		return false;
	}
 	
 	/* 이름이 공란으로 입력되었는 유효성 검사 */
 	if(document.joinForm.membername.value.length == 0) {
 		alert('이름은 필수 입력사항입니다.다시 확인해 주세요!');
 		return false;
 	}
 	
 	/* 이름은 한글만 입력가능하도록 유효성 검사 */
	var hangulName = /^[ㄱㅏ-힣]*$/;
	
	if(!hangulName.test(document.joinForm.membername.value)) {
		alert('이름은 한글만 입력가능합니다.다시 확인해 주세요!');
 		return false;
	}
 	
 	/* 전화번호가 공란으로 입력되었는 유효성 검사 */
 	if(document.joinForm.phone.value.length == 0) {
 		alert('전화번호는 필수 입력사항입니다.다시 확인해 주세요!');
 		return false;
 	}
 	
 	/* 전화번호는 숫자만 입력가능하도록 유효성 검사 */
	if(isNaN(document.joinForm.phone.value)) {
		alert('전화번호는 숫자만 입력가능합니다.다시 확인해 주세요!');
 		return false;
	}
 	
 	/* 이메일이 공란으로 입력되었는 유효성 검사 */
 	if(document.joinForm.email.value.length == 0) {
 		alert('이메일은 필수 입력사항입니다.다시 확인해 주세요!');
 		return false;
 	}
 	
 	/* 아이디의 글자수가 4자~10자 사이의 글자수로 입력하도록 유효성 검사*/
 	if(document.joinForm.memberid.value.length < 4 || document.joinForm.memberid.value.length > 10){
		alert('아이디는 4글자 이상 10글자 이하로만 만드실 수 있습니다.다시 확인해 주세요!');
 		return false;
	}
	
	
	return true; 
 }