var data
$("#results-list")
var allfilter = function(){
	try{
		// debugger
		window.scrollBy(0, 10000);
		setTimeout(function() {injectTheScript()}, 2000);
		window.scrollBy(0, 100000);

	// document.getElementsByClassName("button-primary-medium")[0].click()
		// var currencyinfo=document.getElementsByClassName("global-nav-dropdown-link")[2].click()//accounts
		// console.log(data)
		// chrome.runtime.sendMessage({event: 'ad_search',"data":data}, function(res){
		// 		});

	}
	catch (err) {
				console.log("result -->", err);
	            chrome.runtime.sendMessage({event: 'namesent'}, function(res){
	            });
	      }
}


function injectTheScript() {
		// data=document.getElementsByClassName("pv5 pr6 search-results__result-item")
		// console.log(data)
		// for (var i=0; i<data.length; i++){
		// 		var temp=data[i].children[1].children[0].children[0].getElementsByClassName('a11y-text')[0].innerText
		// 		console.log(temp)
		// }
		data=document.getElementById("results-list")
		data=data.children
		console.log(data)

		for (var i=0; i<data.length; i++){
				var person=""
				var company_name=""
				var name=""
				var exp=""
				var loc=""
				// var temp=data[i].getElementsByClassName("entity-info")[0]
				// var title=temp.getElementsByClassName("name-and-badge-container")[0]
				// person=title.getElementsByClassName("name-container")[0].innerText
				// company_name=title.getElementsByClassName("details-container")[0].getElementsByClassName("company-name")[0].innerText
				// // var company_name=title.getElementsByClassName("details-container")[0].getElementsByClassName("company-name")[0].innerText
				//
				// var info=temp.getElementsByClassName("info")[0]
				// name=info.getElementsByClassName("info-value")[0].innerText
				// exp=info.getElementsByClassName("info-value")[1].innerText
				// loc=info.getElementsByClassName("info-value")[2].innerText

				try{
					var temp=data[i].getElementsByClassName("entity-info")[0]
					try{
						var title=temp.getElementsByClassName("name-and-badge-container")[0]
						try{
							person=title.getElementsByClassName("name-container")[0].innerText
						}catch(err){
							console.log(err)
							person=""
						}
						try{
							company_name=title.getElementsByClassName("details-container")[0].getElementsByClassName("company-name")[0].innerText
						}catch(err){
							console.log(err)
							company_name=""
						}
					}catch(err){
						console.log("class name 'name-and-badge-container' changed")
					}
					try{
						var info=temp.getElementsByClassName("info")[0]
						try{
							name=info.getElementsByClassName("info-value")[0].innerText
						}catch(err){
							console.log(err)
							name=""
						}
						try{
							exp=info.getElementsByClassName("info-value")[1].innerText
						}catch(err){
							console.log(err)
							exp=""
						}
						try{
							loc=info.getElementsByClassName("info-value")[2].innerText
						}catch(err){
							console.log(err)
							loc=""
						}
					}catch(err){
						console.log("class name info' changed")
					}
				}catch(err){
					console.log("class name 'entity-info' changed")
				}

				console.log(person)
				console.log(company_name)
				console.log(name)
				console.log(exp)
				console.log(loc)
				console.log("======")
				var dictionary = {};
				dictionary.person_name=person;
				dictionary.company_name=company_name;
				dictionary.position=name;
				dictionary.experience=exp;
				dictionary.location=loc;
				console.log(dictionary);
				// $.ajax({
				// 			type: "POST",
				// 			contentType: "application/json",
				// 			url:"http://127.0.0.1:5000/getdata",
				// 			dataType: "json",
				// 			data: JSON.stringify(dictionary),
				// 			xhrFields: {
				// 			        withCredentials: true
				// 			},
				// 			success : function(result) {
				//
				// 			    console.log("result -->", result);
				// 				return  result;
				// 			},
				// 			error: function(err) {
				// 				alert("Something is wrong", err);
				// 			}
				// 		});
		}

		// console.log(data)
		chrome.runtime.sendMessage({event: 'ad_search',"data":data}, function(res){
				});
}

allfilter();
