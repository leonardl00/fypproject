@extends('layouts.app-admin')
@section('title') Admin - Product Alter @endsection
@section('content')

<main id="main">

        <!-- Breadcrumbs-->
        <div class="bg-white border-bottom py-3 mb-5">
          <div class="container-fluid d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row">
            <nav class="mb-0" aria-label="breadcrumb">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item"><a href="{{ route('welcome') }}">Home</a></li>
                <li class="breadcrumb-item"><a href="{{ route('admin-product') }}">Product Listing</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Add Product</li>
              </ol>
          </nav>
          </div>
        </div>
        <!-- / Breadcrumbs-->

        <!-- Content-->
        <section class="container-fluid">

        <!-- Page Title -->
        <h2 class="fs-4 mb-3">Add Product</h2>

        @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
                <strong>{{ $message }}</strong>
        </div>
        <img src="images/{{ Session::get('image') }}">
        @endif

        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="post" action="{{ route('admin-add-product.add') }}" enctype="multipart/form-data">
            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
            <div class="row g-4">
                <div class="col-12 col-md-6">
                    <div class="card mb-4">
                        <div class="card-header justify-content-between align-items-center d-flex">
                            <h6 class="card-title m-0">Product Details</h6>
                        </div>
                        <div class="card-body">
                                <div class="mb-3">
                                    <label for="add-lname" class="form-label">Long Product Name</label>
                                    <input class="form-control" id="add-lname" type="text" placeholder="Long product name" name="product_name_long" required>
                                </div>
                                <div class="mb-3">
                                    <label for="add-sname" class="form-label">Short Product Name</label>
                                    <input class="form-control mb-2" id="add-sname" type="text" placeholder="Short product name" name="product_name_short" required>
                                </div>
                                <div class="mb-3">
                                    <label for="add-brand" class="form-label">Brand</label>
                                    <select class="form-control" id="add-brand" name="product_brand" required>
                                        <option value="">Select Brand</option>
                                        <option value="Keychron">Keychron</option>
                                        <option value="Ducky">Ducky</option>
                                        <option value="Redragon">Redragon</option>
                                        <option value="Royal Kludge">Royal Kludge</option>
                                        <option value="GMMK">GMMK</option>
                                        <option value="Leopold">Leopold</option>
                                        <option value="Corsair">Corsair</option>
                                        <option value="Coolermaster">Coolermaster</option>
                                        <option value="Razer">Razer</option>
                                        <option value="Logitech">Logitech</option>
                                        <option value="HyperX">HyperX</option>
                                        <option value="SteelSeries">SteelSeries</option>
                                        <option value="ROG">ROG</option>
                                        <option value="MSi">MSi</option>
                                        <option value="Predator">Predator</option>
                                    </select>
                                </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header justify-content-between align-items-center d-flex">
                            <h6 class="card-title m-0">Prices</h6>
                        </div>
                        <div class="card-body">
                                <div class="mb-3">
                                    <label for="add-baseprice" class="form-label">Base Price</label>
                                    <input class="form-control" id="add-baseprice" type="text" placeholder="Base Price" name="product_base_price" required>
                                </div>
                                <div class="mb-3">
                                    <label for="add-var" class="form-label">Number Of Option</label>
                                    <input class="form-control mb-2" id="number_option" type="number" min="0" max="2" step="1" placeholder="Amount" value="0" onchange="function_change()" name="num_option">
                                    <input id="option" name="option" hidden>
                                </div>
                        </div>
                    </div>

                    <div id="option_container">

                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="card mb-4">
                        <div class="card-header justify-content-between align-items-center d-flex">
                            <h6 class="card-title m-0">Product Description</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="add-desc" class="form-label">Description</label>
                                <textarea class="form-control" id="add-desc" rows="5" name="product_description" required></textarea>
                            </div>
                                <div class="mb-3">
                                    <label for="add-category" class="form-label">Category</label>
                                    <select class="form-control" id="add-category" name="product_categories" required>
                                        <option value="">Select Category</option>
                                        <option value="keyboard">Keyboard</option>
                                        <option value="mouse">Mouse</option>
                                        <option value="monitor">Monitor</option>
                                        <option value="switches">Switches</option>
                                        <option value="other">Accesories</option>
                                    </select>
                                </div>
                                <div class="mb-3 visually-hidden">
                                    <label for="add-opt" class="form-label">Detail Amount</label>
                                    <input class="form-control mb-2" id="add-opt" type="number" placeholder="Amount">
                                </div>
                                <div class="mb-3">
                                    <label for="add-city" class="form-label">Details</label>
                                    <div class="input-group mb-1">
                                        <input type="text" class="form-control" placeholder="Detail name" aria-label="Var" name="detail_name_1">
                                        <span class="input-group-text">-</span>
                                        <input type="text" class="form-control" placeholder="Description" aria-label="VarPrice" name="detail_desc_1">
                                    </div>
                                    <div class="input-group mb-1">
                                        <input type="text" class="form-control" placeholder="Detail name" aria-label="Var" name="detail_name_2">
                                        <span class="input-group-text">-</span>
                                        <input type="text" class="form-control" placeholder="Description" aria-label="VarPrice" name="detail_desc_2">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="add-stripekey" class="form-label">Stripe Key</label>
                                    <input class="form-control" id="add-stripekey" type="text" placeholder="Stripe Key" name="stripe_id">
                                </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header justify-content-between align-items-center d-flex">
                            <h6 class="card-title m-0">Product Thumbnail</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="add-thumbnail" class="form-label">Product image</label>
                                <input class="form-control" type="file" id="add-thumbnail" name="cart_img" required>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header justify-content-between align-items-center d-flex">
                            <h6 class="card-title m-0">Product Images</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="add-image" class="form-label">Product image(s)</label>
                                <input class="form-control" type="file" id="add-image" multiple name="prod_img[]" required>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Add Product</button>
                </div>
            </div>
        </form>

            <!-- Footer -->
            <footer class="  footer">
                <p class="small text-muted m-0">All rights reserved | © Norm 2021</p>
            </footer>


            <!-- Sidebar Menu Overlay-->
            <div class="menu-overlay-bg"></div>
            <!-- / Sidebar Menu Overlay-->
            <!-- / Footer-->

        </section>
        <!-- / Content-->

    </main>

    @endsection


    @section('script')
    <script>
        $( document ).ready(function_load());

        function function_load () {
            function_1();
        }
        function function_change () {
            function_1();
            function_3();
        }
        function function_change2 (val) {
            function_2(val);
            function_3();
        }

        function function_1 () {
            var val = $('#number_option').val(),
                ele = document.getElementById('option_container');
            //console.log("option",val);
            ele.innerHTML = "";

            for(var i = 0; i < parseInt(val); i++) {
                ele.innerHTML = ele.innerHTML + '<div class="card mb-4">\
                            <div class="card-header justify-content-between align-items-center d-flex">\
                                <h6 class="card-title m-0">Option '+ (i+1) +'</h6>\
                            </div>\
                            <div class="card-body">\
                                <div class="mb-3">\
                                    <label for="add-opt" class="form-label">Option Amount</label>\
                                    <input class="form-control mb-2" id="number_variation_'+ (i+1) +'" type="number" placeholder="Amount" min="2" max="5" step="1" onchange="function_change2('+ (i+1) +')" value="2">\
                                </div>\
                                <div class="mb-3">\
                                    <label for="add-city" class="form-label">Options</label>\
                                    <input class="form-control mb-1" id="option_name_'+ (i+1) +'" type="text" placeholder="option name" onchange="function_3()">\
                                    <div id="variation_container_'+ (i+1) +'">\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
                function_2(i+1);
            }
        }
        function function_2 (no) {
            var val = $('#number_variation_'+no).val(),
                ele = document.getElementById('variation_container_'+no);
            //console.log("variation",val);
            ele.innerHTML = "";

            for(var i = 0; i < parseInt(val); i++) {
                ele.innerHTML = ele.innerHTML + '<div class="input-group mb-1">\
                                        <input type="text" class="form-control" id="var_name_'+ no +'_'+ (i+1) +'" placeholder="Variation name" aria-label="Var" onchange="function_3()">\
                                        <span class="input-group-text">RM</span>\
                                        <input type="text" class="form-control" id="var_price_'+ no +'_'+ (i+1) +'" placeholder="Price" aria-label="VarPrice" onchange="function_3()">\
                                    </div>';
            }
        }
        function function_3 () {
            var val = $('#number_option').val(),
                option_element = document.getElementById('option');

            const arr = [];
            for (var i = 0; i < parseInt(val); i++) {
                var option_name = $('#option_name_'+(i+1)).val(),
                    var_num = $('#number_variation_'+(i+1)).val();
                let obj_1 = {};

                    const arr_2 = [];
                    for (var b = 0; b < parseInt(var_num); b++) {
                        let obj_2 = {};
                        var var_name = $('#var_name_'+(i+1)+'_'+(b+1)).val(),
                            var_price = $('#var_price_'+(i+1)+'_'+(b+1)).val();
                        //console.log('#var_name_'+(i+1)+'_'+(b+1),var_name);
                        obj_2.var_name = var_name;
                        obj_2.var_price = var_price;
                        arr_2.push(obj_2);
                    }
                    //console.log('array_2',arr_2);
                obj_1.option_name = option_name;
                obj_1.variation = arr_2;
                arr.push(obj_1);

                //console.log(option_name);
            }
            //console.log(arr);
            const myJSON = JSON.stringify(arr);
            console.log(myJSON);
            option_element.value = myJSON;
        }
        function function_4 () {

        }
    </script>
    @endsection
