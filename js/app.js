let alarm = {
        active: false,
        time: ""
    }
    // los datos 
const namesDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
const namesMonths = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

function getToday() {
    // usamos date 
    let date = new Date();
    // concatenamos la fecha uusamos los datos de los días y meses
    let mydate = namesDays[date.getDay()] + " " + date.getDate() + " de " + namesMonths[date.getMonth()] + " de " + date.getFullYear()
    $("#date").html(mydate)
}

/*creamos una instancia del objeto Date() y
mediante los correspondientes metodos obtenemos: hour, minutes y seconds*
para actualizar la hora debemos hacer una funcion que sirva de temporizador*/
function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    seconds = date.getSeconds();

    // al cambiar la hora a medianoche nos traemos la fecha actual
    if (hour === 0 && minutes === 0) getToday()


    /*cuando las cifras son de un solo digito queremos que se pueda ver 
    el cero delante y eso lo conseguimos con este condicional*/
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    //los juntamos a todos
    let time = hour + ":" + minutes
    $('#hour').html(time)
    $('#seconds').html(seconds)
    awake(time)

}

function awake(time) {
    if (alarm.active) {
        if (alarm.time === time) {
            $(".content-clock").addClass("sound")
            $("#btnStop").css("display", "inline-block")
            startAlarm()
        }
    }
}

function programar() {
    alarm.active = true
    alarm.time = $("#inputTime").val()
    $("#show-alarma").text("Alarma: " + $("#inputTime").val())
    $("#btnAlarm").click()
}

$("#btnStop").click(function() {
    $("#btnStop").css("display", "none")
    $(".content-clock").removeClass("sound")
    stopAlarm()

})

function startAlarm() {
    let sound = document.getElementById("audioTag");
    sound.play()
    if (alarm.active && sound.paused) sound.play()
}

function stopAlarm() {
    let sound = document.getElementById("audioTag");
    sound.pause()
    $("#show-alarma").text("Sin alarma")
    alarm.active = false

}