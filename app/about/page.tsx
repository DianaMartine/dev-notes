import { IonBreadcrumb } from "../shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "../shared/components/ion-page-info/ion-page-info";

export default function About() {
    return (
        <IonLayout>
            <IonBreadcrumb navLinks={[
                {
                    title: "Home",
                    href: "/",
                    nested: [
                        {
                            title: "Sobre",
                        }
                    ]
                }
            ]} />

            <IonPageInfo
                title="Sobre"
                description="Olá Jovem, tudo certo? Esse projeto surgiu de uma ideia de transformar meu caderno de anotações em algo para compartilhar com a comunidade Dev. Aqui você irá encontrar tópicos para estudar de um modo mais fácil e mastigado, pois pra quê complicar mais né? Espero que aproveitem bem esse conteúdo." />
        </IonLayout>
    )
};