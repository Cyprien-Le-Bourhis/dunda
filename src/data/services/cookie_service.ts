export default class CookieService {
    /**
     * 
     * @param {String} name - name of cookie
     * @param {String} value - value of cookie
     * @param {Number} days - days expiration of cookie
     */
    set(name:string, value:string, seconds:number):void {
      let expires = "";
      if (seconds) {         
          expires = "; max-age=" + seconds;
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    /**
     * 
     * @param {String} name - name of cookie
     * @returns {String} value of cookie
     */
    get(name:string):string | null {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for(let i=0;i < ca.length;i++) {
          let c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }

     delete(name:string) :void{   
      document.cookie = name+'=; Max-Age=-99999999;';  
    }
  }
  