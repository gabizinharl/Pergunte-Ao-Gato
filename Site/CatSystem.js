function Ask(){
    var perg = document.getElementsByName("option")
    var pts = [1.0,1.0]
    var resultado = document.querySelector("div#result")

    var x = 0;
    while (x < 2){
        perg[x].value = perg[x].value === "" ? "Nada" : perg[x].value
        var perglow = perg[x].value.toLowerCase()
        
        if (perglow.indexOf("peix") !== -1) {
            if (perglow.indexOf("comer ") !== -1)
                pts[x] += 8 * perg[x].value.length
            else if (perglow.indexOf("matar") !== -1)
                pts[x] += 10 * perg[x].value.length
            else if (perglow.indexOf("morte") !== -1)
                pts[x] += 10 * perg[x].value.length
            else
                pts[x] -= 8 * ((perg[x].value.length + 0.001) / 2)
        }

        if (perglow.indexOf("sim") !== -1)
            pts[x] += 4

        if (perglow.indexOf("gan") !== -1 || perglow.indexOf("ban") !== -1 || perglow.indexOf("pod") !== -1 || perglow.indexOf("sen") !== -1
            || perglow.indexOf("h") !== -1 || perglow.indexOf("ind") !== -1 || perglow.indexOf("pe") !== -1 || perglow.indexOf("ss") !== -1 
            || perglow.indexOf("ea") !== -1 || perglow.indexOf("tan") !== -1)
            pts[x] += 2

        if (perglow.indexOf("fazer") !== -1 || perglow.indexOf("ter") !== -1 || perglow.indexOf("gu") !== -1 || perglow.indexOf("qu") !== -1
            || perglow.indexOf("ce") !== -1 || perglow.indexOf("se") !== -1 || perglow.indexOf("vt") !== -1 || perglow.indexOf("lh") !== -1
            || perglow.indexOf("as") !== -1 || perglow.indexOf("w") !== -1 || perglow.indexOf("mar") !== -1)
            pts[x] += 2.85

        if (perglow.indexOf("bi") !== -1 || perglow.indexOf("y") !== -1 || perglow.indexOf("jo") !== -1 || perglow.indexOf("k") !== -1
            || perglow.indexOf("cen") !== -1 || perglow.indexOf("x") !== -1 || perglow.indexOf("z") !== -1 || perglow.indexOf("xi") !== -1
            || perglow.indexOf("  ") !== -1 || perglow.indexOf("ru") !== -1)
            pts[x] -= 2.2

        if (perglow.indexOf("eh") !== -1 || perglow.indexOf("alt") !== -1 || perglow.indexOf("tab") !== -1 || perglow.indexOf("net") !== -1
            || perglow.indexOf("pens") !== -1 || perglow.indexOf("etr") !== -1 || perglow.indexOf("ant") !== -1
            || perglow.indexOf("list") !== -1 || perglow.indexOf("bal") !== -1 || perglow.indexOf("ll") !== -1)
            pts[x] -= 5.8

        if (perglow.indexOf("fu") !== -1 || perglow.indexOf("mu") !== -1 || perglow.indexOf("xo") !== -1 || perglow.indexOf("ho") !== -1
            || perglow.indexOf("ja") !== -1 || perglow.indexOf("ol") !== -1 || perglow.indexOf("os") !== -1
            || perglow.indexOf("oto") !== -1 || perglow.indexOf("iro") !== -1 || perglow.indexOf("car") !== -1)
            pts[x] -= 1.7

        if (perglow.indexOf("88") !== -1 || perglow.indexOf("50") !== -1 || perglow.indexOf("9") !== -1 || perglow.indexOf("13") !== -1
            || perglow.indexOf("º") !== -1 || perglow.indexOf("ª") !== -1 || perglow.indexOf("*") !== -1 || perglow.indexOf(".") !== -1
            || perglow.indexOf("@") !== -1 || perglow.indexOf("+") !== -1)
            pts[x] += 1.2

        if (perglow.indexOf("lun") !== -1 || perglow.indexOf("lum") !== -1 || perglow.indexOf("min") !== -1 || perglow.indexOf("comp") !== -1
            || perglow.indexOf("comb") !== -1 || perglow.indexOf("tro") !== -1 || perglow.indexOf("bla") !== -1
            || perglow.indexOf("and") !== -1 || perglow.indexOf("pol") !== -1 || perglow.indexOf("pe") !== -1)
            pts[x] += 1.4

        if (perglow.indexOf("ador") !== -1 || perglow.indexOf("nn") !== -1 || perglow.indexOf("ker") !== -1 || perglow.indexOf("kelv") !== -1
            || perglow.indexOf("mui") !== -1 || perglow.indexOf("far") !== -1 || perglow.indexOf("sal") !== -1
            || perglow.indexOf("aei") !== -1 || perglow.indexOf("ui") !== -1 || perglow.indexOf("lei") !== -1)
            pts[x] += 2.1

        if (perglow.indexOf("lega") !== -1 || perglow.indexOf("ocea") !== -1 || perglow.indexOf("brasil") !== -1
            || perglow.indexOf("joga") !== -1 || perglow.indexOf("stud") !== -1 || perglow.indexOf("vida") !== -1
            || perglow.indexOf("bom") !== -1 || perglow.indexOf("inhei") !== -1 || perglow.indexOf("anima") !== -1
            || perglow.indexOf("progr") !== -1 || perglow.indexOf("nada") !== -1 || perglow.indexOf("tubar") !== -1
            || perglow.indexOf("perg") !== -1 || perglow.indexOf("tubar") !== -1 || perglow.indexOf("tubar") !== -1
            || perglow.indexOf("sush") !== -1)
            pts[x] += 7

        if (perglow.indexOf("th") !== -1)
            pts[x] -= 0.3
        if (perglow.indexOf("ea") !== -1)
            pts[x] -= 1
        if (perglow.indexOf("ss") !== -1)
            pts[x] += 1
        if (perglow.indexOf("t") !== -1)
            pts[x] += 1.2
        if (perglow.indexOf("gu") !== -1)
            pts[x] -= 0.8
        if (perglow.indexOf("x") !== -1)
            pts[x] += 2.2
        if (perglow.indexOf("aa") !== -1)
            pts[x] -= 8
        if (perglow.indexOf("ae") !== -1)
            pts[x] -= 2.4
        if (perglow.indexOf("h") !== -1)
            pts[x] += 0.5
        if (perglow.indexOf("v") !== -1)
            pts[x] -= 2.2
        if (perglow.indexOf("?") !== -1)
            pts[x] -= 2.5
        if (perglow.indexOf("n") !== -1)
            pts[x] += 2.4
        if (perglow.indexOf("l") !== -1)
            pts[x] += 1.7
        if (perglow.indexOf("b") !== -1)
            pts[x] -= 1
        if (perglow.indexOf("c") !== -1)
            pts[x] += 0.2
        if (perglow.indexOf("z") !== -1)
            pts[x] += 1
        if (perglow.indexOf("p") !== -1)
            pts[x] += 0.3
        if (perglow.indexOf("j") !== -1)
            pts[x] -= 2.5
        if (perglow.indexOf("q") !== -1)
            pts[x] += 2.4
        if (perglow.indexOf("w") !== -1)
            pts[x] += 1.7
        if (perglow.indexOf("sh") !== -1)
            pts[x] -= 8
        if (perglow.indexOf("o") !== -1)
            pts[x] += 1.1
        if (perglow.indexOf("ã") !== -1)
            pts[x] -= 0.5
        if (perglow.indexOf(".") !== -1)
            pts[x] += 0.6
        if (perglow.indexOf(",") !== -1)
            pts[x] -= 0.2
        if (perglow.indexOf("f") !== -1)
            pts[x] += 2.4
        if (perglow.indexOf("u") !== -1)
            pts[x] += 0.2
        if (perglow.indexOf("e") !== -1)
            pts[x] -= 0.3
        if (perglow.indexOf("s") !== -1)
            pts[x] += 0.8

        if (perglow.indexOf(" ") !== -1)
            pts[x] -= 0.448
        
        if (perg[x].value.length > 0) {
            pts[x] = pts[x] / perg[x].value.length
        }

        perglow = ""
        x++
    }
    var resp = ""
    
    if(pts[0].toPrecision(3) > pts[1].toPrecision(3)){
        resp = perg[0].value 
        perg[1].focus()
    }
    else if(pts[1].toPrecision(3) > pts[0].toPrecision(3)){
        resp = perg[1].value
        perg[0].focus()
    }
    else if(perg[0].value === "Nada" && perg[1].value === "Nada"){
        perg[0].value = perg[1].value = "Nada"
        resp = "Nada."
    }
    else
        resp = "O gato não sabe!"

    resultado.innerHTML = `<p>Entre ${perg[0].value} e ${perg[1].value} o Gato decidiu:</p>` 
    resultado.innerHTML += `<p style="margin-top: 10px; font: bold 30px Arial;">${resp}</p>` 
}

function GetFocus(num){
    var perg = document.getElementsByName("option")
    perg[num].focus()
}

function CleanTxt(id){
    var txt = document.getElementById(id)
    if(txt.value === "Opção 1" || txt.value === "Opção 2")
        txt.value = ""
}

