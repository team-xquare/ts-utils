export class Validator {
    /**
     * 이메일 주소가 RFC 5322 표준을 따르는지 검사합니다. (https://emailregex.com/)
     * @param email 이메일 주소
     */
    public static isEmailValid(email: string) : boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    /**
     * 해당 학년이 맞는지 검사합니다.
     * Type : 1학년 : 1, 2학년 : 2, 3학년 : 3
     * @param gcn 학번 
     * @param type 학년타입
     */
    public static isGradeValid(gcn : string, type : 1 | 2 | 3) : boolean{
        const re = new RegExp(`^${type}`);
        return re.test(gcn);
    }
}