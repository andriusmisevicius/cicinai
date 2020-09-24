<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BusinessRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class BusinessCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class BusinessCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Business::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/business');
        CRUD::setEntityNameStrings('verslas', 'verslai');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::addColumn(['name' => 'title', 'type' => 'text', 'label'=> 'Pavadinimas']);
        CRUD::addColumn(['name' => 'url', 'type' => 'text', 'label'=> 'Nuoroda']);
        CRUD::addColumn(['name' => 'image_path', 'type' => 'image', 'label'=> 'Paveiksliukas']);
        CRUD::addColumn(['name' => 'created_at', 'type' => 'date', 'label'=> 'Sukurimo data']);

        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']);
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(BusinessRequest::class);

        CRUD::addField(['name' => 'title', 'type' => 'text', 'label' => 'Pavadinimas']);
        CRUD::addField(['name' => 'url', 'type' => 'text', 'label' => 'Verslo nuoroda']);
        CRUD::addField(['name' => 'content', 'type' => 'wysiwyg', 'label' => 'Turinys']);
        CRUD::addField(['name' => 'image_path', 'type' => 'image', 'label' => 'Naujienos paveikslėlis']);

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number']));
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
