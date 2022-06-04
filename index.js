function introduction(name) {
    return`Hi, my name is ${name}.`;
}
introduction(Vinson)

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage(Vin, Shee)

function introductionWithLanguageOptional(name, language ='JavaScript'){

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional(Java, C++)


function introductionWithLanguageOptionalTwo(name, language='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptionalTwo(JavaScript)


