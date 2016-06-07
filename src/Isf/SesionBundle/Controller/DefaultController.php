<?php

namespace Isf\SesionBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContext;
use Isf\SesionBundle\Entity\Usuarios;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

//use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        $request->getSession()->set('iconoPagina', 'images/pagina_inicio.png');
        return $this->render('IsfSesionBundle:Default:index.html.twig');
    }

    public function loginAction(Request $request)
    {
        $session = $request->getSession();

        $authenticationUtils = $this->get('security.authentication_utils');
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        $usr = new Usuarios();
        $form = $this->createFormBuilder($usr)
            ->setAction($this->generateUrl('login_check'))
            ->add('username')
            ->add('password', PasswordType::class)
            ->getForm();

        if ($error != null) {
            $this->addFlash('aviso', 'Controle los datos ingresados, si son correctos, contacte al Administrador del sitio.');
        }

        return $this->render('IsfSesionBundle:Default:login.html.twig', array( 'form'=>$form->createView(), 'error' => $error, ) );
    }
}
