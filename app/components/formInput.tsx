function Xvalue(e:any,setformData:any,dataset:any,formData:any,type:any){
  function xm (){
  const value = e.target.value;
  setformData((prevData:any) => ({
    ...prevData,
    dataset: value,
  }))};
  if(type=="name") {
    return <input />
  } ;
}

//const example = document.querySelector("input");
//const listen = example.addEventListener("change",xm)

export function uploadImage (e:any){
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener("load", () => {
        console.log(reader.result);
      });

      alert(`${file.name}`);
    }
  }