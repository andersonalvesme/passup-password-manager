jQuery.fn.extend({form:function(e){if(null!=$(this).data("form"))return $(this).data("form");var t={idField:$(this).find(":input[name=id]"),validate:void 0,notify:!0,criar:!0,editar:!0,filho:!1,afterCancel:function(){},beforeCancel:function(){},afterSave:function(){},beforeSave:function(){},afterOpen:function(){},beforeOpen:function(){},afterDelete:function(){},beforeDelete:function(){},after:function(){},error:function(){}};$.extend(t,e,{form:$(this)},{open:function(e){t.form.block(),t.editar?t.enable():t.disable(),t.beforeOpen(t),$.ajax({url:t.form.attr("name")+"/"+e,type:"GET",dataType:"JSON",error:function(e){$.notify({message:e.status+" - "+e.statusText},{type:"danger"}),t.form.unblock()},success:function(e){if(e.errors)$.notify({message:"Ocorreu algum problema"},{type:"danger"}),t.form.unblock();else{var a;try{$.each(e,function(e,n){(a=t.form.find(":input[name='"+e+"']")).hasClass("moeda")?(a.val(parseFloat(n).toFixed(2)),a.maskMoney("mask")):"checkbox"==a.attr("type")?a.prop("checked",n==a.attr("value-true")):"radio"==a.attr("type")?a.each(function(e,t){$(t).prop("checked",n==$(t).attr("value-true"))}):a.hasClass("selectized")?a.attr("type")?a.hasClass("default-value")?a[0].selectize.setValue(n.split(",")):(a[0].selectize.clearOptions(),$.each(n.split(","),function(e,t){a[0].selectize.createItem(t)})):a[0].selectize.setValue(n):a.hasClass("cpf")?(a.unmask(),a.val(n),a.mask("000.000.000-00")):"date"==a.attr("type")?a.val(moment(n).format("YYYY-MM-DD")):a.val(n)})}catch(e){}t.form.unblock()}t.afterOpen(e,t),t.after(e,t,"open")}})},cancel:function(){t.form.block(),t.criar&&!t.filho||t.editar&&t.filho?t.enable():t.disable(),t.beforeCancel(t),t.form.find(".selectize-input").removeClass("error"),t.form.find(":input[name!=''][name!='_token']:not(button)").each(function(){var e=$(this);e.removeClass("is-invalid"),"checkbox"==e.attr("type")?e.prop("checked",!1):"radio"==e.attr("type")?e.prop("checked",!!e.attr("checked")):e.parents(".selectize-input").length?e.parents(".selectize-control").prev()[0].selectize.clear():e.val("")}),t.validate.resetForm(),t.form.unblock(),t.afterCancel(t),t.after(t,"cancel")},serializeObject:function(){var e,a={};return t.form.find(":input[name!=''][name!='fileuploader-list-arquivo'][type!='file']:not(button)").each(function(){e=$(this),null!=a[e.attr("name")]||null==e.attr("name")||"id"==e.attr("name")&&""==e.val()||e.attr("name")==t.idField.attr("name")&&""==e.val()||("checkbox"==e.attr("type")?a[e.attr("name")]=e.is(":checked")?e.attr("value-true"):e.attr("value-false"):"radio"==e.attr("type")?e.is(":checked")&&(a[e.attr("name")]=e.attr("value-true")):e.hasClass("cpf")?a[e.attr("name")]=e.cleanVal():e.hasClass("moeda")?a[e.attr("name")]=e.maskMoney("unmasked")[0]:a[e.attr("name")]=e.val())}),a},save:function(){t.form.block();var e=Boolean(t.idField.val());t.beforeSave(t),$.ajax({url:t.form.attr("name")+(e?"/"+t.idField.val():""),type:e?"PUT":"POST",data:t.serializeObject(),dataType:"JSON",error:function(e){let a="";422==e.status?$.each(e.responseJSON.errors,function(e,t){a+=(""!=a?"<br>":"")+t}):a=e.errors?e.errors:e.status+" - "+e.statusText,$.notify({message:a},{type:"danger"}),t.form.unblock()},success:function(a){var n="Registro "+(e?"Atualizado":"Salvo");t.notify&&(a.errors?$.notify({message:a.mensagem},{type:"danger"}):(a.mensagem&&(n+="<br>"+a.mensagem),$.notify({message:n},{type:"success"}),t.editar?t.enable():t.disable())),t.form.unblock(),t.afterSave(a,t),t.after(a,t,"save")}})},delete:function(e,a){e&&confirm(a&&a.messageConfirm?a.messageConfirm:"Deseja realmente excluir?")&&($.blockUI(),t.beforeDelete(t),$.ajax({url:t.form.attr("name")+"/"+e,type:"DELETE",error:function(e){let t="";422==e.status?$.each(e.responseJSON.errors,function(e,a){t+=(""!=t?"<br>":"")+a}):t=e.errors?e.errors:e.status+" - "+e.statusText,$.notify({message:t},{type:"danger"}),$.unblockUI()},success:function(e){$.notify({message:"Registro removido"},{type:"success"}),$.unblockUI(),t.afterDelete(e,t),t.after(e,t,"delete")}}))},enable:function(){t.form.find("input:not(.default-disabled), textarea:not(.default-disabled)").attr("disabled",!1).end().find('button[type="submit"]:not(.default-disabled)').attr("disabled",!1).end().find(".selectized:not(.default-disabled)").each(function(){$(this)[0].selectize.enable()})},disable:function(){t.form.find('input[type!="search"], textarea').attr("disabled",!0).end().find('button[type="submit"]').attr("disabled",!0).end().find(".selectized:not(.default-disabled)").each(function(){$(this)[0].selectize.disable()})}}),t.form.find(".moeda").maskMoney({thousands:".",decimal:",",precision:2}).addClass("text-right"),t.form.find("input").attr("autocomplete","off"),t.form.find(".cpf").mask("000.000.000-00"),t.form.find(".copy").click(function(){let e=$("<input>");$("#modal").append(e),e.val($(this).parent().prev().val()).select(),document.execCommand("copy"),e.remove(),$.notify("Cópia efetuada")}),t.form.find('input:not([type="hidden"]), select, textarea').each(function(){var e=$(this);e.attr("required")&&e.prev().append('<span class="text-danger"> *</span>')}),t.validate=t.form.validate({focusInvalid:!1,ignore:':hidden, input[type="search"], .disabled input'});try{var a,n,r=new(window.SpeechRecognition||window.webkitSpeechRecognition),i=!1,o="";t.form.find("textarea").each(function(){$(this).hasClass("default-disabled")||$(this).attr("disabled")||($(this).prev().append('<a id="btnAudio'+$(this).attr("id")+'"><i class="fe fe-mic ml-1"></i></a><span class="si-audio-duracao m-l-xs hidden"></span>'),$("#btnAudio"+$(this).attr("id")).click(function(){a=$(this).parent().next(),n=$(this).next(),i?(r.stop(),i=!1,o="",$(".si-audio-duracao").addClass("hidden")):(r.start(),i=!0,o=a.val()+(""!=a.val()?" ":""))}),r.onstart=function(){n.removeClass("hidden")},r.onspeechend=function(){r.stop(),i=!1,$(".si-audio-duracao").addClass("hidden")},r.onresult=function(e){var t=e.resultIndex,n=e.results[t][0].transcript;1==t&&n==e.results[0][0].transcript||(o+=n,a.val(o))})})}catch(e){}return t.form.on("reset",function(){return t.cancel(),!1}).on("submit",function(){return t.form.find("input[type=text]").each(function(){$(this).val($.trim($(this).val()))}),"0,00"==t.form.find(".moeda").val()&&t.form.find(".moeda").val(""),t.form.valid()&&t.form.form().save(),!1}),$(this).data("form",t).data("form")}});