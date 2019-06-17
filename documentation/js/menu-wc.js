'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">renatoclt documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' : 'data-target="#xs-components-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' :
                                            'id="xs-components-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsImgTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsImgTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsImgTextNdivComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsImgTextNdivComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' : 'data-target="#xs-pipes-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' :
                                            'id="xs-pipes-links-module-AppModule-32e64f1612264cf54e0a7063d5ccc3dc"' }>
                                            <li class="link">
                                                <a href="pipes/NumberToArrayPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberToArrayPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormsModule.html" data-type="entity-link">FormsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormsModule-3d9496072dd40834b81463285ea5eb2b"' : 'data-target="#xs-components-links-module-FormsModule-3d9496072dd40834b81463285ea5eb2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormsModule-3d9496072dd40834b81463285ea5eb2b"' :
                                            'id="xs-components-links-module-FormsModule-3d9496072dd40834b81463285ea5eb2b"' }>
                                            <li class="link">
                                                <a href="components/InputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxUtilitarioChatModule.html" data-type="entity-link">NgxUtilitarioChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxUtilitarioChatModule-cf48912ebe5e7c21e60d8ed254514578"' : 'data-target="#xs-components-links-module-NgxUtilitarioChatModule-cf48912ebe5e7c21e60d8ed254514578"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxUtilitarioChatModule-cf48912ebe5e7c21e60d8ed254514578"' :
                                            'id="xs-components-links-module-NgxUtilitarioChatModule-cf48912ebe5e7c21e60d8ed254514578"' }>
                                            <li class="link">
                                                <a href="components/ChatBusquedaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatBusquedaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatConversacionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatConversacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatDetalleAgregarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatDetalleAgregarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatDetalleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatListaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatListaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxUtilitarioDynamicModule.html" data-type="entity-link">NgxUtilitarioDynamicModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NgxUtilitarioDynamicModule-4b42e5af17277b23d20e007b47d7b661"' : 'data-target="#xs-injectables-links-module-NgxUtilitarioDynamicModule-4b42e5af17277b23d20e007b47d7b661"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NgxUtilitarioDynamicModule-4b42e5af17277b23d20e007b47d7b661"' :
                                        'id="xs-injectables-links-module-NgxUtilitarioDynamicModule-4b42e5af17277b23d20e007b47d7b661"' }>
                                        <li class="link">
                                            <a href="injectables/DynamicComponentService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DynamicComponentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxUtilitarioIconsModule.html" data-type="entity-link">NgxUtilitarioIconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxUtilitarioIconsModule-f272bc517f86d09f660fc64cc34bcc45"' : 'data-target="#xs-components-links-module-NgxUtilitarioIconsModule-f272bc517f86d09f660fc64cc34bcc45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxUtilitarioIconsModule-f272bc517f86d09f660fc64cc34bcc45"' :
                                            'id="xs-components-links-module-NgxUtilitarioIconsModule-f272bc517f86d09f660fc64cc34bcc45"' }>
                                            <li class="link">
                                                <a href="components/RepeatIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepeatIconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxUtilitarioMenuModule.html" data-type="entity-link">NgxUtilitarioMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxUtilitarioMenuModule-746a05338d468a435f514d5ec098d136"' : 'data-target="#xs-components-links-module-NgxUtilitarioMenuModule-746a05338d468a435f514d5ec098d136"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxUtilitarioMenuModule-746a05338d468a435f514d5ec098d136"' :
                                            'id="xs-components-links-module-NgxUtilitarioMenuModule-746a05338d468a435f514d5ec098d136"' }>
                                            <li class="link">
                                                <a href="components/MenuDotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuDotComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxUtilitarioModalModule.html" data-type="entity-link">NgxUtilitarioModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxUtilitarioModalModule-74b3721e40585484bcae60b7cb1de464"' : 'data-target="#xs-components-links-module-NgxUtilitarioModalModule-74b3721e40585484bcae60b7cb1de464"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxUtilitarioModalModule-74b3721e40585484bcae60b7cb1de464"' :
                                            'id="xs-components-links-module-NgxUtilitarioModalModule-74b3721e40585484bcae60b7cb1de464"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Fecha.html" data-type="entity-link">Fecha</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DynamicComponentService.html" data-type="entity-link">DynamicComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link">ModalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IChatConversacion.html" data-type="entity-link">IChatConversacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChatConversacionDetalle.html" data-type="entity-link">IChatConversacionDetalle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMensajeDetalle.html" data-type="entity-link">IMensajeDetalle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuDot.html" data-type="entity-link">IMenuDot</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});