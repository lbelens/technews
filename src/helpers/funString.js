
export function formatDate(format){
    let date = new Date();

    const dateToday = {
         dd: date.getDate(),
         mm: date.getMonth() + 1,
         yyyy: date.getFullYear()
     }

     const yesterday = new Date(date)
     yesterday.setDate(yesterday.getDate()-1)

    let fecha = format.replace(/dd|mm|yyyy/gi, matched => dateToday[matched]);

    let today = new Date(fecha).toISOString()
    const dates={
        today: today.slice(0,-14),
        yesterday: yesterday.toISOString().slice(0,-14)
    }
    return dates;
}

export function sliceString(string){
    let newString;

    if(string.length>=200){
        newString=string.slice(0,-150)+"...";
    }

    if(string.length<200){
        newString= string.slice(0,-15)+ "...";
    }

    if(string.length<100){
        newString= string.slice(0,-20)+ "...";
    }

    return newString;
}

export const get_rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const get_uuid = (length=14) => {
  const ar = [
    "abcdefghijklmnopqrstuvxyz", //0: letras
    "0123456789"                 //1: números
  ]
  const r = new Array(length).fill(0).map(()=>{
    //indica de modo aleatorio si se usará letras o números
    let i = get_rnd(0,1)
    //si i=0 => letras, sino (i=1) numeros
    let str = ar[i]
    //si es 1 se pasará a mayusculas el string obtenido, evidentemente para los números
    //no hay mayor efecto
    str = get_rnd(0,1) ? str.toUpperCase() : str 
    //se obtendrá un valor entre 0 y la longitud del string anterior 10 o 25
    const max = str.length - 1 
    i = get_rnd(0, max)
    return str.split("")[i]
  }).join("")
  return r
}

export function addKey(array){
    array.map((data)=>{
        return data.key=get_uuid()
    })
}