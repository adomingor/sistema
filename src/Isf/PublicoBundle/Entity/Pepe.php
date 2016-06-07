<?php

namespace Isf\PublicoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Pepe
 *
 * @ORM\Table(name="pepe")
 * @ORM\Entity(repositoryClass="Isf\PublicoBundle\Repository\PepeRepository")
 */
class Pepe
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="caca", type="string", length=25)
     */
    private $caca;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set caca
     *
     * @param string $caca
     *
     * @return Pepe
     */
    public function setCaca($caca)
    {
        $this->caca = $caca;

        return $this;
    }

    /**
     * Get caca
     *
     * @return string
     */
    public function getCaca()
    {
        return $this->caca;
    }
}

