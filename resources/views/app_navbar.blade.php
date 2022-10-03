<header class="navbar navbar-expand-md navbar-light">
    <div class="container-xl">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="." class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3">
            <img src="{{ asset('assets/images/logo/favicon-32x32.png') }}" class="header-brand-img"
                 alt="{{ config('app.name') }}">
        </a>
        @if(Auth::check())
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-toggle="dropdown">
                        <span
                            class="avatar bg-blue-lt">@if(Auth::user()) {{ strtoupper(substr(Auth::user()->name, 0, 2)) }} @endif</span>
                        <div class="d-none d-xl-block pl-2">
                            <div>{{ Auth::user()->name }}</div>
                            <div class="mt-1 small text-muted">@if(Auth::user()->admin) Administrador @else
                                    Usuário @endif</div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="#modalAppMyUser" data-toggle="modal" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            My user
                        </a>

                        @if(Auth::user()->admin == 1)
                            <a href="#modalAppMyPlan" data-toggle="modal" class="dropdown-item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24"
                                     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <path
                                        d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
                                    <path d="M12 6v2m0 8v2"></path>
                                </svg>
                                My plan</a>
                        @endif

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon dropdown-item-icon" width="24"
                                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
                                <line x1="12" y1="4" x2="12" y2="12"></line>
                            </svg>
                            {{ __('Logout') }}
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                              style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </div>
                </div>
            </div>
        @endif
        <div class="collapse navbar-collapse" id="navbar-menu">
            <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                <ul class="navbar-nav" id="ulMenu">
                    <li class="nav-item @if(Request::is('passwords')) active @endif">
                        <a href="{{ url('passwords') }}" class="nav-link">
                            <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                 viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                 stroke-linecap="round" stroke-linejoin="round"><path stroke="none"
                                                                                      d="M0 0h24v24H0z"></path><rect
                                    x="5" y="11" width="14" height="10" rx="2"></rect><circle cx="12" cy="16"
                                                                                              r="1"></circle><path
                                    d="M8 11v-4a4 4 0 0 1 8 0v4"></path></svg>
                            </span>
                            <span class="nav-link-title">
                                Passwords
                            </span>
                        </a>
                    </li>
                    @can('folder-view')
                        <li class="nav-item @if(Request::is('folders')) active @endif">
                            <a href="{{ url('folders') }}" class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round"><path stroke="none"
                                                                                          d="M0 0h24v24H0z"></path><circle
                                        cx="12" cy="12" r="4"></circle></svg>
                                </span>
                                <span class="nav-link-title">
                                    Folders
                                </span>
                            </a>
                        </li>
                    @endcan
                    @can('user-view')
                        <li class="nav-item @if(Request::is('users')) active @endif">
                            <a href="{{ url('users') }}" class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round"><path stroke="none"
                                                                                          d="M0 0h24v24H0z"></path><circle
                                        cx="12" cy="12" r="4"></circle></svg>
                                </span>
                                <span class="nav-link-title">
                                    Users
                                </span>
                            </a>
                        </li>
                    @endcan
                    @can('group-view')
                        <li class="nav-item @if(Request::is('groups')) active @endif">
                            <a href="{{ url('groups') }}" class="nav-link">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round"><path stroke="none"
                                                                                              d="M0 0h24v24H0z"></path><circle
                                            cx="12" cy="12" r="4"></circle></svg>
                                </span>
                                <span class="nav-link-title">
                                    Groups
                                </span>
                            </a>
                        </li>
                    @endcan
                </ul>
            </div>
        </div>
    </div>
</header>
