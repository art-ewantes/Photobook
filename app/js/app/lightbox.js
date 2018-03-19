class LightBox{
	constructor(){
		this.src = '';
		this.arrImages = [];
		this.count = null;
	}
	
	// init plugin
	initLightBox(){
		$(document).ready(()=>{
			$('[data-lightbox]').each((i, val) => {
				this.arrImages.push(val);
				
			});
			this.initEvents(this.arrImages);
			
			this.switchLightbox();
		});
	}
	
	// init all elements with data attr

	initEvents(arr){
		$(arr).each((i, val) => {
			this.addEventListeners(val, i, arr);
		});
	}

	// switching power lightbox

	switchLightbox(){
		var turnOn = $('[switcher] input').attr('checked', false);
		var self = this;
		$('[switcher]').click(()=>{
			if(turnOn[0].checked == false){
				turnOn[0].checked = self.turnOffLightBox(true);
			}else{
				turnOn[0].checked = self.turnOnLightbox(false);
			}
			return false;
		})
	}

	// turnOff lightbox
	turnOffLightBox(check){
		$(this.arrImages).each((i, val) => {
			$(val).removeAttr('data-lightbox');
		});
		$(this.arrImages).off();
		return check;
	}

	// turnOn lightbox
	turnOnLightbox(check){
		$(this.arrImages).each((i, val) => {
			$(val).attr('data-lightbox', '');
		});
		this.initEvents(this.arrImages);
		return check;
	}


	// add event to all elements with data attr

	addEventListeners(e, idx, arr){
		var self = this;
		var index = idx;
		$(e).click(function (e) {
			e.preventDefault();
			self.handle($(this));
			self.galleryNavigarion(arr, index);
		});
		$('.close-modal').click(function (e) {
			e.preventDefault();
			self.closeModal();
			self.count = null;
		});
	}

	handle(elem){
		var type = this.getElementType(elem);
		if(type === 'img'){
			this.src = this.getAttrImg(elem);
		}
		this.openModal(this.src);
		
	}

	// open modal after img click

	openModal(src){
		$('.modal-body').append(`<img src="${src}">`);
		$('.modal').addClass('opened');
		$('.modal-dialog').addClass('animated fadeIn');
		this.closeModalEsc();
		this.closeModalByBackground();
	}

	// get image attr

	getAttrImg(elem){
		return elem[0].src;
	}

	// get element type 

	getElementType(elem){
		return elem[0].localName;
	}

	// close modal event

	closeModal(){
		$('.modal-body').empty();
		$('.modal').removeClass('opened');
		$('.modal-dialog').removeClass('animated fadeIn');
	}

	closeModalEsc(){
		var self = this;
		$(document).keyup(function(e) {
			e.preventDefault()
			if (e.keyCode == 27) {
				self.closeModal();
			}
		});
	}

	closeModalByBackground(){
		var self = this;
		$('[data-lightbox-overlay]').click((e)=>{
			e.preventDefault();
			self.closeModal();
		}).children().click(function(e){
			e.stopPropagation();
		});
	}
	
	galleryNavigarion(arr, currentItem){
		this.clickNext(arr, currentItem);
		this.clickPrev(arr, currentItem);
	}


	clickNext(arr, currentItem){
		var self = this;
		this.count = currentItem;
		
		$("#next").off().click((e)=>{
			e.preventDefault();
			
			$(arr).each((i, val)=>{
				if(i === self.count && self.count < arr.length - 1){
					var imgItem = arr[self.count + 1].src;

					this.changeImg(imgItem);

					$("#prev").removeClass("disable");
					$("#next").removeClass("disable");
				}
			})
			
			self.count++;

			if(self.count >= arr.length - 1){

				$("#next").addClass("disable");

			}
		})
		if(self.count >= arr.length - 1){

			$("#next").addClass("disable");

		}else{

			$("#next").removeClass("disable");

		}
	}

	clickPrev(arr, currentItem){
		var self = this;
		this.count = currentItem;

		$("#prev").off().click((e)=>{
			e.preventDefault();

			$(arr).each((i, val)=>{
				if(i === self.count && self.count > 0){
					var imgItem = arr[self.count - 1].src;

					this.changeImg(imgItem);

					$("#prev").removeClass("disable");
					$("#next").removeClass("disable");
				}
				
			})

			self.count--;

			if(this.count === 0){

				$("#prev").addClass("disable");

			}
		})
		if(this.count === 0){

			$("#prev").addClass("disable");

		}else{
			
			$("#prev").removeClass("disable");

		}
	}

	changeImg(imgItem){
		$('.modal-body').empty();
		$('.modal-body').append(`<img src="${imgItem}">`);
	}
	
	

}
export const lightBox = new LightBox();
