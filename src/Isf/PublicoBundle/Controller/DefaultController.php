<?php

namespace Isf\PublicoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        $request->getSession()->set('iconoPagina', 'images/pagina_inicio.png');
        return $this->render('IsfPublicoBundle:Default:index.html.twig');
    }
}
