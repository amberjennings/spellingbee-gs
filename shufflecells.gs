function onEdit(e) {
  if (e && e.source) {
    var sheet = e.source.getActiveSheet();
    var checkboxCell = sheet.getRange("I13");

    if (e.range.getA1Notation() === "I13" && e.value === "TRUE") {
      var ranges = ["G4:G5", "G6:G7", "H7:H8", "I4:I5", "I6:I7", "H3:H4"];
      var values = [];

      for (var i = 0; i < ranges.length; i++) {
        var range = sheet.getRange(ranges[i]);
        values.push(range.getValues()[0][0]);
      }

      for (var i = values.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = values[i];
        values[i] = values[j];
        values[j] = temp;
      }

      for (var i = 0; i < ranges.length; i++) {
        var range = sheet.getRange(ranges[i]);
        range.setValue([[values[i]]]);
      }

      checkboxCell.setValue(false);
    }
  }
}

