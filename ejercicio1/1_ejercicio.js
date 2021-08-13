let button = document.querySelector("#button");
button.addEventListener('click', () =>{ usePrint(); });

const printName = () =>{
  return new Promise((resolve, reject) =>{
    let nameP = document.getElementById("name").value;

    if(nameP === "") reject(new Error("Error en el nombre"));
    else resolve(nameP);
  });
}

const usePrint = async () =>{
  try{
    let nameP = await printName();
    alert("Hola, " + nameP);
  }
  catch(error){
    window.alert(error);
  }
  finally{
    window.alert("Ten un buen día, hasta luego.");
  }
}