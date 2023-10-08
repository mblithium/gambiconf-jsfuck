
function conversion(...values) {
    values.forEach((value) => {
        let conversions = {
            "original_value": [value, typeof(value)],
            "to_number": Number(value),
            "to_string": String(value),
            "to_boolean": Boolean(value),
            "is_Null": value === null 
        }
        console.table(conversions);
    })
}

conversion(
    false, 
    true, 
    0, 
    1,
    "0",
    "000",
    "1",
    NaN,
    Infinity,
    -Infinity,
    "",
    "20",
    "vinte",
    [],
    [20],
    [10, 20],
    ["vinte"],
    ["dez", "vinte"],
    function(){},
    {},
    null,
    undefined,
    "5" * "2",
    "5" + "2",
    ["Olá", 5, 25, "javascript"][+null],
    ["Olá", 5, 25, "javascript"][+!![]]
);
