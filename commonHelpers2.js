import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),m=a.elements.email,l=a.elements.message,s="feedback-form-state",e=JSON.parse(localStorage.getItem(s))??{email:"",message:""};(e.email||e.message)&&(m.value=e.email,l.value=e.message);a.addEventListener("input",i);a.addEventListener("submit",o);function i(t){if(t.target.name==="email")e.email=m.value.trim();else if(t.target.name==="message")e.message=l.value.trim();else return;localStorage.setItem(s,JSON.stringify(e))}function o(t){t.preventDefault(),e.email!==""&&e.message!==""?(console.log(e),localStorage.removeItem(s),e.email="",e.message="",a.reset()):alert("please fill in all fields")}
//# sourceMappingURL=commonHelpers2.js.map
