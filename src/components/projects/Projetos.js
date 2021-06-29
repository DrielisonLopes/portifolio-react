import './projetos.scss';
import React from 'react';
//cards
import reactCard1 from '../../assets/cards/reactCard1.png';
import reactCard2 from '../../assets/cards/reactCard2.jpeg';
import reactCard3 from '../../assets/cards/reactCard3.png';
import card1 from '../../assets/cards/card1.png';
import card2 from '../../assets/cards/card2.png';
import card3 from '../../assets/cards/card3.png';
import card4 from '../../assets/cards/card4.png';
import card5 from '../../assets/cards/card5.png';
import card6 from '../../assets/cards/card6.png';
//icones
import icon1 from '../../assets/icones/html.png';
import icon2 from '../../assets/icones/css.png';
import icon3 from '../../assets/icones/javascript.png';
import icon4 from '../../assets/icones/react.png';
import icon5 from '../../assets/icones/typescript.png';
import icon6 from '../../assets/icones/node-js.png';
import icon7 from '../../assets/icones/bootstrap.png';

export default () => {
    return (
        <>
            <section id='projects' className='projects'>
                <h2 >Projetos em React</h2>

                <div class="container">
                    <div class="cards">
                            <div class="card" >
                                <img src={reactCard1} alt={"reactCard1"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">Hokage React</p>
                                    </div>
                                        <p>
                                            Prove o quanto você sabe sobre React e veja qual é o
                                            seu verdadeiro nível de programador até se tornar um Hokage.
                                        </p>
                                    <div class="btn-more">
                                        <a href="http://reactquiz.drielisonlopes.vercel.app/" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={reactCard2} alt={"reactCard2"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">MoveLax</p>
                                    </div>
                                        <p>
                                            Dê um descanso a sua mente e corpo. O MoveLax vai te ajudar
                                            a lembrar sobre as pausas para ter um rendimento melhor!
                                        </p>
                                    <div class="btn-more">
                                        <a href="http://movelax.vercel.app/" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={reactCard3} alt={"reactCard3"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">PodCastr</p>
                                    </div>
                                        <p>
                                            Fique por dentro das novidades no universo da programação
                                            através desse podcast bem intuitivo.
                                        </p>
                                    <div class="btn-more">
                                        <a href="https://github.com/DrielisonLopes/podcastr" target="_blank">
                                            Repositório
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <h2 >Projetos Gerais</h2>

                <div class="container">
                    <div class="cards">
                            <div class="card" >
                                <img src={card1} alt={"card1"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">DevFinances</p>
                                    </div>
                                        <p>
                                            Nessa aplicação você pode fazer seus orçamentos de gastos
                                            para te ajudar a não ficar no vermelho
                                        </p>
                                    <div class="btn-more">
                                        <a href="http://zealous-clarke-7e9d31.netlify.app/" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card" >
                                <img src={card2} alt={"card2"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">Calculadora Mecânica</p>
                                    </div>
                                        <p>
                                            Cálculos científicos, conversores e uma calculadora que
                                            vai te ajudar a calcular seu serviço Freelancer.
                                        </p>
                                    <div class="btn-more">
                                        <a href="https://fcamasquad3.github.io/calculadora-mecanica/" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={card3} alt={"card3"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">Certificard</p>
                                    </div>
                                        <p>
                                            Vamos direto para meu codepen? Aqui terá a sua disposição
                                            mini jogos e aplicações para seu entreterimento.
                                        </p>
                                    <div class="btn-more">
                                        <a href="https://codepen.io/drielisonlopes" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={card4} alt={"card4"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">Github Class</p>
                                    </div>
                                        <p>
                                            Você acha que sabe sobre github mas na hora h bate aquela
                                            dúvida? Fica aqui com esse help pesca de dicas!
                                        </p>
                                    <div class="btn-more">
                                        <a href="https://drielisonlopes.github.io/Git_GitHubCLASS/" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={card5} alt={"card5"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">O que fazer na quarentena?</p>
                                    </div>
                                        <p>
                                            Saia do tédio com as dicas desta página que
                                            vai te ajudar do entreterimento ao conhecimento.
                                        </p>
                                    <div class="btn-more">
                                        <a href="http://oquefazerna-quarentena.surge.sh/index.html" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card" >
                                <img src={card6} alt={"card6"}/>
                                <div class="content">
                                    <div class="title">
                                        <p class="card-title">Livraria Beulla</p>
                                    </div>
                                        <p>
                                            Pequeno site de loja feita para primeira cliente Freelancer
                                            que foi iniciado, aguardando contato para finalizações.
                                        </p>
                                    <div class="btn-more">
                                        <a href="https://determined-wiles-21aef7.netlify.app/" target="_blank">
                                            Confira
                                        </a>
                                    </div>
                                </div>
                            </div>
                    
                </div>
                    <div class="extra-links">
                        <div class="link"><a href="https://cabidenudebrecho.com.br/" target="_blank">👨‍💻 e-commerce onde participei como Freelancer</a></div>
                        <div class="link"><a href="https://www.linkedin.com/posts/drielison-lopes_setup-investidores-sonhos-activity-6791744870865285120-3u7D" target="_blank">📝 Artigo: O quanto você tem investido nos seus sonhos?</a></div>
                        <div class="link"><a href="https://www.notion.so/Resumo-React-310d3604856f4c97ac4ca66154ff29ef" target="_blank">⚛ Resumo que fiz sobre React</a></div>
                    </div>
                </div>
                    <br/>
                    MINHAS SKILLS
                    <br/>
                <div class="icons">
                    <img src={icon1} alt={"icon1"}/>
                    <img src={icon2} alt={"icon2"}/>
                    <img src={icon3} alt={"icon3"}/>
                    <img src={icon4} alt={"icon4"}/>
                    <img src={icon5} alt={"icon5"}/>
                    <img src={icon6} alt={"icon6"}/>
                    <img src={icon7} alt={"icon7"}/>
                </div>
            </section>
        </>
    )
}