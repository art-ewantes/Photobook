class LightBox{
	constructor(){
		this.src = '';
	}
	
	eventListener(e){
		var self = this;
		$('[data-lightbox]').click(function (e) {
			e.preventDefault();
			self.handle($(this));
		});
		$('.close-modal').click(function (e) {
			e.preventDefault();
			self.closeModal();
		});
	}
	handle(elem){
		var type = this.getElementType(elem);
		if(type === 'img'){
			this.src = this.getAttrImg(elem);
		}
		this.openModal(this.src);
	}
	openModal(src){
		$('.modal-body').append(`<img src="${src}">`);
		$('.modal').addClass('opened');
	}
	getAttrImg(elem){
		return elem[0].src;
	}
	getElementType(elem){
		return elem[0].localName;
	}
	closeModal(){
		$('.modal-body').empty();
		$('.modal').removeClass('opened');
	}


	
}
export const lightBox = new LightBox();
