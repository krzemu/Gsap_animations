class SplitText {
    constructor(element, { type = 'chars', containerType = 'span' } = {}) {
        this.element = element;
        this.type = type;
        this.containerType = containerType;
        this.checkType();
    }

    checkType() {
        const { type } = this;
        switch (type) {
            case 'chars': {
                this.splitContentHandler();
                this.setNewElementContentChars();
                break;
            }
            case 'words': {
                this.splitWordsHandler();
                this.setNewElementContentWords();
                break;
            }
            default: {
                console.log('-!!- SplitText ---- Wrong Type -!!-');
                break;
            }
        }
    }

    setNewElementContentChars() {
        const { element, type, chars, containerType } = this;
        element.innerHTML = chars.map(item => {
            return `<${containerType}>${item}</${containerType}>`
        }).join('');
        this.chars = element.querySelectorAll(`${containerType}`);
    }

    setNewElementContentWords() {
        const { element, type, chars, containerType } = this;
        const elementHTML = chars.map(item => {
            return `<${containerType}>${item}</${containerType}> `
        }).join('');
        element.innerHTML = elementHTML;
        this.words = element.querySelectorAll(`${containerType}`);
    }
    splitContentHandler() {
        const { element } = this;
        this.chars = element.textContent.split('');
    }
    splitWordsHandler() {
        const { element } = this;
        let splitContent = element.textContent.split(' ');
        this.chars = splitContent.filter(item => item !== "");
    }
}