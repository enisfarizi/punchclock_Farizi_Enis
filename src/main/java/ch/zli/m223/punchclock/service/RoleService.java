package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Role;
import ch.zli.m223.punchclock.repository.RoleRepository;
import org.jvnet.hk2.annotations.Service;

@Service
public class RoleService {

    private RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) { this.roleRepository = roleRepository;}

    public Role createRole(Role role) {return roleRepository.saveAndFlush(role);}

    public void deleteRole(Role role) {this.roleRepository.delete(role);}
}
