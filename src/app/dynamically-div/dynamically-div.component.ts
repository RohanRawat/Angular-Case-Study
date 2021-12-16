
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-dynamically-div',
  templateUrl: './dynamically-div.component.html',
  styleUrls: ['./dynamically-div.component.scss']
})
export class DynamicallyDivComponent implements OnInit {

  @ViewChild('innerAppend', { static: true }) innerAppend!: ElementRef;

  constructor(
   
  ) { }

  ngOnInit(): void {
    this.createDynamicallyDiv(20);
  
  }

  ngAfterViewInit() {
    this.innerAppend.nativeElement.addEventListener('click',this.listeningGlobalClick);
    //Scroll Event
    window.addEventListener('scroll', this.listeningWindowScroll);
  }

  /**
   * @function createDynamicallyDiv
   * @param count {Create Number of elements}
   * @summary create dynamic div as based on the @param
   */
  private createDynamicallyDiv(count: number = 1) {
    const documentFragment = document.createDocumentFragment();
    let lastCreateElement = this.getLastAppendChildrenId;
    for (let index = 0; index < count; index++) {
      // const element = array[index];
      const creatDiv = document.createElement('div');
      creatDiv.innerHTML = `
        <div class="inner-create-box"><button type="button">Button ${lastCreateElement} Click</button></div>
      `;
      creatDiv.setAttribute('track-id', lastCreateElement);
      creatDiv.className="ui-lg-3 ui-md-3 ui-sm-6",
      creatDiv.style.cssText = `height: 250px;position:relative;margin-bottom:30px;`;
      ++lastCreateElement;
      documentFragment.appendChild(creatDiv);
    }
  
    this.innerAppend.nativeElement.appendChild(documentFragment);
  }

  /**
   * @returns {LastElement Id}
   */
  private get getLastAppendChildrenId() {
    const lastElement = this.innerAppend.nativeElement.lastChild;
    if (!lastElement) {return 0;}

    return this.innerAppend.nativeElement.lastChild.getAttribute('track-id');
  }

  /**
   * @function listeningGlobalClick
   * @param event {Target}
   * @summary Listening Click and perform action as per user target
   */
  public listeningGlobalClick(event: any) {
    const closestTrackIdElement = event.target.closest('[track-id]');
    //Element Not found
    if (!closestTrackIdElement || event.target.nodeName !== 'BUTTON') {
      return;
    }
    const getTrackId = closestTrackIdElement.getAttribute('track-id');
    alert(`Button ${getTrackId} is clicked.`);
  }

  //Window Scroll Event
  private listeningWindowScroll = () => {
    const scrollPer = window.scrollY + window.innerHeight;
    if (scrollPer >= document.documentElement.scrollHeight) {
      //Load More
      this.createDynamicallyDiv(20);
    }
  };

  /**
   * @summary Remove All Listener
   */
  private removeAllListener() {
    /**Element Click*/
    this.innerAppend.nativeElement.removeEventListener('click', this.listeningGlobalClick);
    /**Window Scroll */
    window.removeEventListener('scroll', this.listeningWindowScroll);
  }

  ngOnDestroy(): void {
    this.removeAllListener();
  }

}
