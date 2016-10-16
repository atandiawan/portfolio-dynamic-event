$(document).ready(function(){
  $("#tombol").click(function(){
    $("h1").html("Tombol di Click")
  })

  $("#tombol").mouseenter(function(){
    $("h1").html("Tombol di Hover")
  })

  $("#tombol").mouseleave(function(){
    $("h1").html("Title Semula")
  })

  $("#tombol").dblclick(function(){
    $("h1").html("Tombol di Double Click")
  })
})
