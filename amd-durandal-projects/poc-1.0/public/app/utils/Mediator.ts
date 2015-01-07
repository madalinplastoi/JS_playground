/**
 * Created by tzutz on 07.01.2015.
 */
import webComponentRef = require('./WebComponent');
export class Mediator{
    private context : webComponentRef.WebComponent;
    constructor(viewModel : webComponentRef.WebComponent){
        this.context = viewModel;
    }
}