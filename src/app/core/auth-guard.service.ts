@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanLoad {
  unauthorised: string = 'You are not authorised to visit this page'
  constructor(private userPermissionService: UserPermissionService) { }

  canLoad(route: Route) {
    const isAdmin = this.userPermissionService.isAdmin();
    console.log('route.path', route.path, isAdmin)
    if(route.path.includes('admin')) {
      !isAdmin && alert(this.unauthorised);
      return isAdmin;
    } else {
      isAdmin && alert(this.unauthorised);
      return !isAdmin;
    }
  }
}